/* eslint-disable @typescript-eslint/no-explicit-any */
import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { IPost } from './post.interface'
import { Post } from './post.model'

const createPost = async (
  file: any,
  data: Partial<IPost>,
): Promise<IPost | null> => {
  const uploadedImage: any = await uploadToCloudinary(file)
  const imageUrl = uploadedImage.secure_url
  data.imageUrl = imageUrl
  const result = await Post.create(data)
  return result
}

export const postServices = {
  createPost,
}
