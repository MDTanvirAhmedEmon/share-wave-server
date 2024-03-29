import { Model, Types } from 'mongoose'
import { IUser } from '../users/users.interface'

export type IPost = {
  text?: string
  imageUrl: string
  userId: Types.ObjectId | IUser
}

export type PostModel = Model<IPost, Record<string, unknown>>
