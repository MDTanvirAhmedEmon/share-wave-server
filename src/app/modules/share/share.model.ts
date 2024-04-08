import { Schema, model } from 'mongoose'
import { IShare, ShareModel } from './share.interface'

const shareSchema = new Schema<IShare, ShareModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Share = model<IShare, ShareModel>('Share', shareSchema)
