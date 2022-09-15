import getStats from '../utils/getStats'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (_: VercelRequest, response: VercelResponse) => {
  const { stressBalance } = await getStats()
  response.status(200).send(stressBalance)
}
