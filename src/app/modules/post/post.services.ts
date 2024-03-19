import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { Post } from './post.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createPost = async (file: any, data: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const uploadedImage: any = await uploadToCloudinary(file)
  console.log(uploadedImage)
  const imageUrl = uploadedImage.secure_url
  data.imageUrl = imageUrl
  const result = await Post.create(data)
  return result
}

export const postServices = {
  createPost,
}
