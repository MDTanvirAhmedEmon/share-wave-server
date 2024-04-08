import { IShare } from './share.interface'
import { Share } from './share.model'

const sharePost = async (
  userId: string,
  data: Partial<IShare>,
): Promise<IShare> => {
  console.log(data)
  console.log(userId)
  const shareData = {
    userId: userId,
    ownerId: data.ownerId,
    postId: data.postId,
  }

  const result = await Share.create(shareData)
  return result
}

export const shareServices = {
  sharePost,
}
