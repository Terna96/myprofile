import { Router } from 'express'
import Project from '../models/Project.js'

const router = Router()

router.get('/', async (_req, res) => {
  const items = await Project.find().sort({ createdAt: -1 })
  res.json(items)
})

router.post('/', async (req, res) => {
  const created = await Project.create(req.body)
  res.status(201).json(created)
})

export default router
