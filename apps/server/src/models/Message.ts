import { Schema, model } from 'mongoose'

const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps: true })

export type Message = {
  name: string
  email: string
  content: string
}

export default model('Message', MessageSchema)
