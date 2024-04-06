import { Model, Types } from 'mongoose'
import { IUser } from '../users/users.interface'
import { IPost } from '../post/post.interface'

export type IComment = {
  userId: Types.ObjectId | IUser
  postId: Types.ObjectId | IPost
  text: string
}

export type CommentModel = Model<IComment, Record<string, unknown>>
