import { Stats } from 'types'
import { getEffectiveVO2Max } from './getEffectiveVO2Max'
import { getValue } from './getValue'

let stats: Stats
let expiration = new Date().getTime() + 1000 * 60 * 60

export default async function getStats () {
  const date = new Date().getTime()

  if (date > expiration || !stats) {
    stats = {
      effectiveVO2Max: await getEffectiveVO2Max(),
      marathonShape: await getValue(2),
      fatigue: await getValue(3),
      fitness: await getValue(4),
      stressBalance: await getValue(5),
      workloadRatio: await getValue(6),
      restDays: await getValue(7),
      monotony: await getValue(8),
      trainingStrain: await getValue(9),
    }
  }

  return stats
}
