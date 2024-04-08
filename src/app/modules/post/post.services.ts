/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose'
import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { IUser } from '../users/users.interface'
import { IPost } from './post.interface'
import { Post } from './post.model'
import { LoveReact } from '../loveReact/loveReact.model'

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

const getAllPost = async (id: string): Promise<IPost[]> => {
  const posts = await Post.find()
  const postsWithReactions: IPost[] = []
  for (const post of posts) {
    const reactions = await LoveReact.find({ postId: post._id })
    const userAlreadyReacted = reactions.some(
      reaction => reaction?.userId.toString() === id,
    )
    const postWithReactions = {
      ...post.toObject(),
      reactions,
      userAlreadyReacted,
    }
    postsWithReactions.push(postWithReactions)
  }

  return postsWithReactions
}

const getMyPost = async (id: string): Promise<IPost[]> => {
  const posts = await Post.find({ userId: id }).sort({ createdAt: 'desc' })
  const postsWithReactions: IPost[] = []
  for (const post of posts) {
    const reactions = await LoveReact.find({ postId: post._id })
    const userAlreadyReacted = reactions.some(
      reaction => reaction?.userId.toString() === id,
    )
    const postWithReactions = {
      ...post.toObject(),
      reactions,
      userAlreadyReacted,
    }
    postsWithReactions.push(postWithReactions)
  }

  return postsWithReactions
}

const getSinglePost = async (id: string): Promise<IPost | null> => {
  const result = await Post.findById({ _id: id })
  return result
}

export const postServices = {
  createPost,
  getAllPost,
  getMyPost,
  getSinglePost,
}
