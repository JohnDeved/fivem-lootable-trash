// node_modules/shared/exports/esx.ts
var esx = globalThis.exports.es_extended.getSharedObject();
var ESX_Server = esx;

// config.json
var loot = [
  { weight: 1, amount: [1, 1], types: [2], name: "weapon_dagger" },
  { weight: 1, amount: [1, 1], types: [2], name: "weapon_crowbar" },
  { weight: 1, amount: [1, 1], types: [2], name: "weapon_hammer" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_hatchet" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_knife" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_knuckle" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_machete" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_switchblade" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_wrench" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weapon_bottle" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "ammo_9" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "amethyst" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy1" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy2" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy3" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy4" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy5" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy6" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy7" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy8" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "autograph_roxxxy9" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "bandage" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "bait" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "bait_pro" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "bauxite" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "beef" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "beer" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "blindfold" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "blood_syringe" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "black_money" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "booze" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "bread" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_cables" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_can" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_electronics" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_nintendo_switch" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_phone" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_syringe" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "broken_tshirt" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cable" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cableties" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cartier_diamong_ring" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cartier_gold_earrings" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "casino_chips" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "circuit_board" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "coal" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "coca_leafe" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cocaine" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "coffee" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "condom" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "computer" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "copperore" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "cotton" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "croton_oil" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "diamond" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "dirty_water" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "dunger" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "electric_tape" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "grapefruit" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_muffin" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_brownie" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_coffee" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_tea" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_blt" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_pommes_h" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_chips_h" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_frikadelle" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_watermelonpart_part" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_chicken_soup" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_mashed_potatoes" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "food_fied_egg" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "glass_bottle" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "goldnugget" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "gsr_cloth" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "gunpowder" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "ironore" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "joint" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "lockpick" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "longpapes" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_01" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_02" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_03" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_04" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_05" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "love_note_06" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "med_pills_ibuprofen600" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "nail" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "paper_waste" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "pavement" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "phone_old" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "plastic_bag" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "racing_stick" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "radio" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "razo_blade" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "rubin" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "rum" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "screw" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "sponge" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "solder" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "spraycan" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "stretched_cocaine" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "stretched_heroine" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "stretched_weed" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "stretched_tilidin" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "topaz" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "water" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "weed_seed" },
  { weight: 1, amount: [1, 1], types: [1, 2], name: "zincore" }
];

// server/random.ts
function getRandomLoot(containerType, loot2 = loot) {
  const items = loot2.filter((item) => item.types.includes(containerType));
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  const scrambledItems = items.sort(() => Math.random() - 0.5);
  for (const item of scrambledItems) {
    if (random < item.weight) {
      const randomAmount = Math.floor(Math.random() * (item.amount[1] - item.amount[0] + 1)) + item.amount[0];
      return {
        name: item.name,
        amount: randomAmount
      };
    }
    random -= item.weight;
  }
}

// server/server.ts
console.log("[lootable-trash] Server Resource Started");
var searchedObjects = [];
function getDistance2d(pos1, pos2) {
  const [x1, y1] = pos1;
  const [x2, y2] = pos2;
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
onNet("lootable-trash:searchTrash", (source, obj) => {
  const xPlayer = ESX_Server.GetPlayerFromId(source);
  const count = searchedObjects.filter((pos) => getDistance2d(pos, obj.pos) < 100).length;
  console.log("searched trash", obj, source);
  console.log("area searched trash count", count);
  if (count > 5) {
    emitNet("lootable-trash:searchTrashResult", source);
    return;
  }
  searchedObjects.push(obj.pos);
  const item = getRandomLoot(obj.type);
  console.log("trash found item", item);
  const isWeapon = item.name.startsWith("weapon_");
  if (isWeapon)
    xPlayer.addWeapon(item.name, item.amount);
  else
    xPlayer.addInventoryItem(item.name, item.amount);
  item.name = isWeapon ? ESX_Server.GetWeaponLabel(item.name) : ESX_Server.GetItemLabel(item.name);
  emitNet("lootable-trash:searchTrashResult", source, item);
});
