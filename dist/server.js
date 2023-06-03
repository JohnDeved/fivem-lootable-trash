// server/server.ts
console.log("[lootable-trash] Server Resource Started");
var searchedObjects = [];
function getDistance2d(pos1, pos2) {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
onNet("lootable-trash:searchTrash", (source, obj) => {
  const count = searchedObjects.filter((pos) => getDistance2d(pos, obj.pos) < 100).length;
  console.log("searched trash", obj, source);
  console.log("area searched trash count", count);
  if (count > 5) {
    emitNet("lootable-trash:searchTrashResult", source);
    return;
  }
  searchedObjects.push(obj.pos);
  emitNet("lootable-trash:searchTrashResult", source, "result_" + count);
});
