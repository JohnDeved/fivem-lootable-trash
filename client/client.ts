import { trashObjects } from '../config.json'
import type { IRandomLoot } from '../server/random'

export type TrashObject = NonNullable<ReturnType<typeof getNearestTrashObject>>

let activeObject: ReturnType<typeof getNearestTrashObject> | undefined
let isSeachingTrash = false
const searchedObjects: number[] = []

// get nearest object of type trash
function getNearestTrashObject () {
  const [x, y, z] = GetEntityCoords(PlayerPedId(), true)

  // get first object within 2 meters of player
  for (const trashObject of trashObjects) {
    // GetGanePool('CObject') returns a list of all objects streamed in.
    const id = GetClosestObjectOfType(x, y, z, 1, GetHashKey(trashObject.name), false, false, false)

    if (!id) continue

    if (HasObjectBeenBroken(id)) {
      continue
    }

    // get cords of object
    const pos = GetEntityCoords(id, true)

    return { id, pos, ...trashObject }
  }
}

function sleep (time: number) {
  return new Promise(resolve => setTimeout(resolve, time, null))
}

async function searchTrash (obj: TrashObject) {
  ClearAllHelpMessages()
  activeObject = undefined
  isSeachingTrash = true

  // make sure player is facing object
  TaskTurnPedToFaceCoord(PlayerPedId(), obj.pos[0], obj.pos[1], obj.pos[2], 1000)
  await sleep(1000)

  // set direction of player
  const [x, y] = GetEntityCoords(PlayerPedId(), true)
  const heading = GetHeadingFromVector_2d(obj.pos[0] - x, obj.pos[1] - y)
  SetEntityHeading(PlayerPedId(), heading)

  TaskStartScenarioInPlace(PlayerPedId(), 'PROP_HUMAN_BUM_BIN', 0, true)
  // exports["progressBars"].startUI(5000, "Müll wird durchsucht...")
  await sleep(5000)

  TaskStartScenarioInPlace(PlayerPedId(), 'PROP_HUMAN_BUM_BIN', 0, false)

  // clear animation
  TaskStandStill(PlayerPedId(), 1)

  // get server id of player
  const id = GetPlayerServerId(PlayerId())
  emitNet('lootable-trash:searchTrash', id, obj)
  isSeachingTrash = false
  searchedObjects.push(obj.id)
}

setTick(() => {
  if (!activeObject) return

  if (IsControlJustPressed(0, 51)) {
    if (!canSearchTrash()) return
    return searchTrash(activeObject)
  }

  // get world to screen coords
  const [onScreen, x, y] = GetScreenCoordFromWorldCoord(activeObject.pos[0], activeObject.pos[1], activeObject.pos[2] + 1.5)
  if (!onScreen) return

  // display 3d text on trash object
  SetTextFont(0)
  SetTextScale(0.0, 0.5)
  SetTextColour(255, 255, 255, 255)
  SetTextOutline()
  SetTextEntry('STRING')
  SetTextJustification(0)
  AddTextComponentString('🗑️')
  DrawText(x, y)
})

// check if player is allowed to search trash
function canSearchTrash () {
  if (isSeachingTrash) return false

  // check if player is in vehicle
  if (IsPedInAnyVehicle(PlayerPedId(), true)) return false

  // check if player is dead
  if (IsEntityDead(PlayerPedId())) return false

  return true
}

// check for trash every 5 seconds
setInterval(() => {
  setImmediate(() => {
    if (!canSearchTrash()) return

    const object = getNearestTrashObject()

    // check if object is already searched
    if (object && searchedObjects.includes(object.id)) return

    if (object?.id !== activeObject?.id) {
      ClearAllHelpMessages()

      if (object) {
        BeginTextCommandDisplayHelp('THREESTRINGS')
        AddTextComponentSubstringPlayerName('Drücke ~INPUT_CONTEXT~ um den Müll zu durchsuchen.')
        EndTextCommandDisplayHelp(0, false, true, 50000)
      }
    }

    activeObject = object
  })
}, 1000)

onNet('lootable-trash:searchTrashResult', (result?: IRandomLoot) => {
  if (!result) {
    SetNotificationTextEntry('STRING')
    AddTextComponentString('Hier gibt es ~y~nichts~s~ mehr zu finden.')
    DrawNotification(true, false)
    return
  }

  SetNotificationTextEntry('STRING')
  AddTextComponentString(`Du hast ~g~${result.amount}x ${result.name}~s~ gefunden.`)
  DrawNotification(true, false)
})
