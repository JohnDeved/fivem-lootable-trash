import { ESX_Server as ESX } from 'shared/exports/esx'
import type { TrashObject } from '../client/client'
import { getRandomLoot } from 'random'

console.log('[lootable-trash] Server Resource Started')

const searchedObjects: number[][] = []

function getDistance2d (pos1: number[], pos2: number[]) {
  const [x1, y1] = pos1
  const [x2, y2] = pos2

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

onNet('lootable-trash:searchTrash', (source: number, obj: TrashObject) => {
  const xPlayer = ESX.GetPlayerFromId(source)

  // count how many times trash has been searched in the area
  const count = searchedObjects.filter(pos => getDistance2d(pos, obj.pos) < 100).length

  console.log('searched trash', obj, source)
  console.log('area searched trash count', count)

  if (count > 5) {
    emitNet('lootable-trash:searchTrashResult', source)
    return
  }

  // add to searched objects
  searchedObjects.push(obj.pos)

  const item = getRandomLoot(obj.type)
  console.log('trash found item', item)

  const isWeapon = item.name.startsWith('weapon_')
  if (isWeapon) xPlayer.addWeapon(item.name, item.amount)
  else xPlayer.addInventoryItem(item.name, item.amount)

  item.name = isWeapon ? ESX.GetWeaponLabel(item.name) : ESX.GetItemLabel(item.name)

  emitNet('lootable-trash:searchTrashResult', source, item)
})
