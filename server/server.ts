console.log("[lootable-trash] Server Resource Started")

import type { TrashObject } from '../client/client'

const searchedObjects: number[][] = []

function getDistance2d(pos1: number[], pos2: number[]) {
  const [x1, y1] = pos1
  const [x2, y2] = pos2

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

onNet("lootable-trash:searchTrash", (source: number, obj: TrashObject) => {

  // count how many times trash has been searched in the area
  const count = searchedObjects.filter(pos => getDistance2d(pos, obj.pos) < 100).length 
  
  console.log("searched trash", obj, source)
  console.log("area searched trash count", count)

  if (count > 5) {
    emitNet("lootable-trash:searchTrashResult", source)
    return
  }

  // add to searched objects
  searchedObjects.push(obj.pos)
 
  // respond with result
  emitNet("lootable-trash:searchTrashResult", source, 'result_'+count)
})