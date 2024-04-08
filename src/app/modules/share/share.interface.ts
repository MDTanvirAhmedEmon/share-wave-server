import { Model, Types } from 'mongoose'
import { IUser } from '../users/users.interface'
import { IPost } from '../post/post.interface'

export type IShare = {
  userId: Types.ObjectId | IUser
  ownerId: Types.ObjectId | IUser
  postId: Types.ObjectId | IPost
}

export type ShareModel = Model<IShare, Record<string, unknown>>
