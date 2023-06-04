import config from '../config.json'

export type IRandomLoot = ReturnType<typeof getRandomLoot>
export function getRandomLoot (containerType: number, loot = config.loot) {
  const items = loot.filter(item => item.types.includes(containerType))

  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)
  let random = Math.random() * totalWeight

  // scramble the items
  const scrambledItems = items.sort(() => Math.random() - 0.5)

  for (const item of scrambledItems) {
    if (random < item.weight) {
      const randomAmount = Math.floor(Math.random() * (item.amount[1] - item.amount[0] + 1)) + item.amount[0]
      return {
        name: item.name,
        amount: randomAmount,
      }
    }

    random -= item.weight
  }
}
