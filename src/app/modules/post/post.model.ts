import { Schema, model } from 'mongoose'
import { IPost, PostModel } from './post.interface'

const postSchema = new Schema<IPost, PostModel>(
  {
    text: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Post = model<IPost, PostModel>('Post', postSchema)
