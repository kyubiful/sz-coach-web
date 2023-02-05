import { NextApiRequest, NextApiResponse } from 'next'
import { savePostDataBySlug } from '../../../services/blog.services'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { body } = req
    const { slug, postData, title, description, active } = JSON.parse(body)

    try {
      savePostDataBySlug(slug, postData, title, description, active)
      res.status(200).json({ status: 200, msg: 'OK' })
    } catch (e) {
      res.status(403).json({ status: 403, msg: 'Error' })
    }
  }
}
