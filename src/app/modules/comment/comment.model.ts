import { Schema, model } from 'mongoose'
import { CommentModel, IComment } from './comment.interface'

const commentSchema = new Schema<IComment, CommentModel>(
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
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Comment = model<IComment, CommentModel>('Comment', commentSchema)
