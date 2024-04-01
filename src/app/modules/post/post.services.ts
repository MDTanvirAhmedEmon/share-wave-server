/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose'
import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { IUser } from '../users/users.interface'
import { IPost } from './post.interface'
import { Post } from './post.model'

const createPost = async (
  file: any,
  data: Partial<IPost>,
  id: Types.ObjectId | IUser,
): Promise<IPost | null> => {
  const uploadedImage: any = await uploadToCloudinary(file)
  const imageUrl = uploadedImage.secure_url
  data.imageUrl = imageUrl
  data.userId = id
  const result = await Post.create(data)
  return result
}

const getAllPost = async (): Promise<IPost[]> => {
  const result = await Post.find()
  return result
}

const getMyPost = async (id: string): Promise<IPost[]> => {
  const result = await Post.find({ userId: id }).sort({ createdAt: 'desc' })
  return result
}

export const postServices = {
  createPost,
  getAllPost,
  getMyPost,
}
