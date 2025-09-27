import { Schema, model } from 'mongoose'

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: String,
  tags: [String],
}, { timestamps: true })

export type Project = {
  title: string
  description: string
  url?: string
  tags?: string[]
}

export default model('Project', ProjectSchema)
