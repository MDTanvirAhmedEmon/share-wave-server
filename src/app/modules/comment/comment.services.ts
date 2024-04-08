/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IComment } from './comment.interface'
import { Comment } from './comment.model'

const createComment = async (
  userId: string,
  data: any,
): Promise<IComment | undefined> => {
  data.userId = userId

  const result = await Comment.create(data)
  return result
}

const getAllComment = async (postId: string): Promise<IComment[]> => {
  const result = await Comment.find({ postId: postId })
    .populate('userId', 'firstName lastName profileImageUrl')
    .sort({ createdAt: 'desc' })
  return result
}

export const commentServices = {
  createComment,
  getAllComment,
}
