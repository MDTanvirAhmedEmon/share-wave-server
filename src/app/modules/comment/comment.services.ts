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

export const commentServices = {
  createComment,
}
