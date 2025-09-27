import mongoose from 'mongoose'

export async function connectDB(uri: string) {
  if (!uri) throw new Error('Missing MongoDB URI')
  await mongoose.connect(uri)
  return mongoose
}
