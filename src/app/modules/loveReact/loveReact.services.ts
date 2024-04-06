/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ILoveReact } from './loveReact.interface'
import { LoveReact } from './loveReact.model'

const createLoveReact = async (
  userId: string,
  data: any,
): Promise<ILoveReact | undefined> => {
  const postId = data.postId
  data.userId = userId

  const isReacted = await LoveReact.findOne({ postId: postId, userId: userId })
  if (isReacted) {
    const result = await LoveReact.deleteOne({ postId: postId, userId: userId })
  }
  if (!isReacted) {
    const result = await LoveReact.create(data)
    return result
  }
}

export const LoveReactServices = {
  createLoveReact,
}
