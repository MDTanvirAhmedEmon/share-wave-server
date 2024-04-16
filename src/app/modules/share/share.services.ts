import { IShare } from './share.interface'
import { Share } from './share.model'

const sharePost = async (
  userId: string,
  data: Partial<IShare>,
): Promise<IShare> => {
  const shareData = {
    userId: userId,
    ownerId: data.ownerId,
    postId: data.postId,
  }

  const result = await Share.create(shareData)
  return result
}

const deleteShare = async (id: string): Promise<IShare | null> => {
  const result = await Share.findByIdAndDelete({ _id: id })
  return result
}

export const shareServices = {
  sharePost,
  deleteShare,
}
