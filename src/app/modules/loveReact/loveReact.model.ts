import { Schema, model } from 'mongoose'
import { ILoveReact, LoveReactModel } from './loveReact.interface'

const loveReactSchema = new Schema<ILoveReact, LoveReactModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    reaction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const LoveReact = model<ILoveReact, LoveReactModel>(
  'LoveReact',
  loveReactSchema,
)
