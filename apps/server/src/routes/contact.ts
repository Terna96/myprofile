import { Router } from 'express'
import Message from '../models/Message.js'

const router = Router()

router.post('/', async (req, res) => {
  const created = await Message.create(req.body)
  res.status(201).json({ ok: true, id: created.id })
})

export default router
