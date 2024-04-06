import { Model, Types } from 'mongoose'
import { IUser } from '../users/users.interface'
import { IPost } from '../post/post.interface'

export type ILoveReact = {
  userId: Types.ObjectId | IUser
  postId: Types.ObjectId | IPost
  reaction: string
}

export type LoveReactModel = Model<ILoveReact, Record<string, unknown>>
