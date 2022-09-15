import getStats from '../utils/getStats'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (_: VercelRequest, response: VercelResponse) => {
  const { monotony } = await getStats()
  response.status(200).send(monotony)
}
