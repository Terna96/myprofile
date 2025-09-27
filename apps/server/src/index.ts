import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './db.js'
import projects from './routes/projects.js'
import contact from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 4000
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'

app.use(cors({ origin: ORIGIN }))
app.use(express.json())

app.get('/', (_req, res) => res.json({ ok: true, service: 'portfolio-api' }))
app.use('/api/projects', projects)
app.use('/api/contact', contact)

const uri = process.env.MONGODB_URI || ''
connectDB(uri).then(() => {
  app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`))
}).catch((err) => {
  console.error('Failed to connect DB:', err)
  process.exit(1)
})
