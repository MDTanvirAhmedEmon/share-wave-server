/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose'
import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { IUser } from '../users/users.interface'
import { IPost } from './post.interface'
import { Post } from './post.model'
import { LoveReact } from '../loveReact/loveReact.model'
import { Share } from '../share/share.model'

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
  const randomSkip = Math.floor(Math.random() * 5)
  const posts = await Post.find()
    .populate('userId', 'firstName lastName profileImageUrl')
    .skip(randomSkip)
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
  const posts = await Post.find({ userId: id })
    .populate('userId', 'firstName lastName profileImageUrl')
    .sort({ createdAt: 'desc' })

  const sharedPosts = await Share.find({ userId: id })
    .populate('userId', 'firstName lastName profileImageUrl')
    .populate('ownerId', 'firstName lastName profileImageUrl')
    .populate('postId')
    .sort({ createdAt: 'desc' })

  const postsWithReactions: any[] = []
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
  for (const post of sharedPosts) {
    const sharedPost: any = post.postId
    const reactions = await LoveReact.find({ postId: sharedPost._id })
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
  postsWithReactions.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
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
