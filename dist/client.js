"use strict";
(() => {
  // config.json
  var trashObjects = [
    { name: "prop_bin_01a", type: 1 },
    { name: "prop_bin_02a", type: 1 },
    { name: "prop_bin_03a", type: 1 },
    { name: "prop_bin_04a", type: 1 },
    { name: "prop_bin_05a", type: 1 },
    { name: "prop_bin_06a", type: 1 },
    { name: "prop_bin_07a", type: 1 },
    { name: "prop_bin_07b", type: 1 },
    { name: "prop_bin_07c", type: 1 },
    { name: "prop_bin_07d", type: 1 },
    { name: "prop_bin_08a", type: 1 },
    { name: "prop_bin_08open", type: 1 },
    { name: "prop_bin_09a", type: 1 },
    { name: "prop_bin_10a", type: 1 },
    { name: "prop_bin_10b", type: 1 },
    { name: "prop_bin_11a", type: 1 },
    { name: "prop_bin_11b", type: 1 },
    { name: "prop_bin_12a", type: 1 },
    { name: "prop_bin_13a", type: 1 },
    { name: "prop_bin_14a", type: 1 },
    { name: "prop_bin_14b", type: 1 },
    { name: "prop_bin_beach_01a", type: 1 },
    { name: "prop_bin_delpiero", type: 1 },
    { name: "prop_bin_delpiero_b", type: 1 },
    { name: "prop_skid_trolley_2", type: 1 },
    { name: "prop_dumpster_01a", type: 2 },
    { name: "prop_dumpster_02b", type: 2 },
    { name: "prop_dumpster_3a", type: 2 },
    { name: "prop_dumpster_4a", type: 2 },
    { name: "prop_dumpster_4b", type: 2 },
    { name: "prop_dumpster_02a", type: 2 },
    { name: "prop_recyclebin_04_a", type: 2 },
    { name: "prop_recyclebin_04_b", type: 2 }
  ];

  // client/client.ts
  var activeObject;
  var isSeachingTrash = false;
  var searchedObjects = [];
  function getNearestTrashObject() {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
    for (const trashObject of trashObjects) {
      const id = GetClosestObjectOfType(x, y, z, 1, GetHashKey(trashObject.name), false, false, false);
      if (!id)
        continue;
      if (HasObjectBeenBroken(id)) {
        continue;
      }
      const pos = GetEntityCoords(id, true);
      return { id, pos, ...trashObject };
    }
  }
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time, null));
  }
  async function searchTrash(obj) {
    ClearAllHelpMessages();
    activeObject = void 0;
    isSeachingTrash = true;
    TaskTurnPedToFaceCoord(PlayerPedId(), obj.pos[0], obj.pos[1], obj.pos[2], 1e3);
    await sleep(1e3);
    const [x, y] = GetEntityCoords(PlayerPedId(), true);
    const heading = GetHeadingFromVector_2d(obj.pos[0] - x, obj.pos[1] - y);
    SetEntityHeading(PlayerPedId(), heading);
    try {
      globalThis.exports.progressBars.startUI(5e3, "M\xFCll wird durchsucht...");
    } catch (e) {
    }
    TaskStartScenarioInPlace(PlayerPedId(), "PROP_HUMAN_BUM_BIN", 0, true);
    await sleep(5e3);
    TaskStartScenarioInPlace(PlayerPedId(), "PROP_HUMAN_BUM_BIN", 0, false);
    TaskStandStill(PlayerPedId(), 1);
    const id = GetPlayerServerId(PlayerId());
    emitNet("lootable-trash:searchTrash", id, obj);
    isSeachingTrash = false;
    searchedObjects.push(obj.id);
  }
  setTick(() => {
    if (!activeObject)
      return;
    if (IsControlJustPressed(0, 51)) {
      if (!canSearchTrash())
        return;
      return searchTrash(activeObject);
    }
    const [onScreen, x, y] = GetScreenCoordFromWorldCoord(activeObject.pos[0], activeObject.pos[1], activeObject.pos[2] + 1.5);
    if (!onScreen)
      return;
    SetTextFont(0);
    SetTextScale(0, 0.5);
    SetTextColour(255, 255, 255, 255);
    SetTextOutline();
    SetTextEntry("STRING");
    SetTextJustification(0);
    AddTextComponentString("\u{1F5D1}\uFE0F");
    DrawText(x, y);
  });
  function canSearchTrash() {
    if (isSeachingTrash)
      return false;
    if (IsPedInAnyVehicle(PlayerPedId(), true))
      return false;
    if (IsEntityDead(PlayerPedId()))
      return false;
    return true;
  }
  setInterval(() => {
    if (!canSearchTrash())
      return;
    const object = getNearestTrashObject();
    if (object && searchedObjects.includes(object.id))
      return;
    if (object?.id !== activeObject?.id) {
      ClearAllHelpMessages();
      if (object) {
        BeginTextCommandDisplayHelp("THREESTRINGS");
        AddTextComponentSubstringPlayerName("Dr\xFCcke ~INPUT_CONTEXT~ um den M\xFCll zu durchsuchen.");
        EndTextCommandDisplayHelp(0, false, true, 5e4);
      }
    }
    activeObject = object;
  }, 1e3);
  onNet("lootable-trash:searchTrashResult", (result) => {
    if (!result) {
      SetNotificationTextEntry("STRING");
      AddTextComponentString("Hier gibt es ~y~nichts~s~ mehr zu finden.");
      DrawNotification(true, false);
      return;
    }
    SetNotificationTextEntry("STRING");
    AddTextComponentString(`Du hast ~g~${result.amount}x ${result.name}~s~ gefunden.`);
    DrawNotification(true, false);
  });
})();
