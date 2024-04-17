/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { createAccessToken } from '../../../helpers/jwtHelper'
import { IUser } from './users.interface'
import { User } from './users.model'
import { uploadToCloudinary } from '../../../helpers/fileUploader'
import { Post } from '../post/post.model'

const signUpUser = async (data: IUser): Promise<any> => {
  const isExist = await User.findOne({ email: data.email })
  if (isExist) {
    throw new Error('User already exists')
  }

  const result = await User.create(data)

  const tokenData = {
    id: result._id,
    email: result.email,
  }
  const accessToken = createAccessToken(
    tokenData,
    config?.secret as Secret,
    config?.expires_in as string,
  )
  const refreshToken = createAccessToken(
    tokenData,
    config?.refresh_secret as Secret,
    config?.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
    result,
  }
}

const signInUser = async (data: IUser): Promise<any> => {
  const isExist = await User.findOne({ email: data.email })
  if (!isExist) {
    throw new Error('User does not exists')
  }

  if (isExist?.password !== data.password) {
    throw new Error('password did not match')
  }

  const tokenData = {
    id: isExist?._id,
    email: isExist?.email,
  }
  const accessToken = createAccessToken(
    tokenData,
    config?.secret as Secret,
    config?.expires_in as string,
  )
  const refreshToken = createAccessToken(
    tokenData,
    config?.refresh_secret as Secret,
    config?.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
  }
}
const getUserInfo = async (id: string): Promise<IUser | null> => {
  const result = await User.findById({ _id: id })
  return result
}

const updateProfilePicture = async (
  file: any,
  id: string,
): Promise<IUser | null> => {
  const data: any = {}
  const postData: any = {}
  const uploadedImage: any = await uploadToCloudinary(file)
  const profilePicture = uploadedImage.secure_url
  data.profileImageUrl = profilePicture
  postData.imageUrl = profilePicture
  postData.userId = id
  const result = await User.findByIdAndUpdate({ _id: id }, data, { new: true })
  if (result) {
    const postResult = await Post.create(postData)
  }
  return result
}

const updateCoverPhoto = async (
  file: any,
  id: string,
): Promise<IUser | null> => {
  const data: any = {}
  const postData: any = {}
  const uploadedImage: any = await uploadToCloudinary(file)
  const coverPhoto = uploadedImage.secure_url
  data.coverPhoto = coverPhoto
  postData.imageUrl = coverPhoto
  postData.userId = id

  const result = await User.findByIdAndUpdate({ _id: id }, data, { new: true })
  if (result) {
    const postResult = await Post.create(postData)
  }
  return result
}

const getAllUser = async (id: string): Promise<Partial<IUser | unknown>> => {
  const result = await User.find({ _id: { $ne: id } }).select(
    'firstName lastName profileImageUrl createdAt',
  )
  return result
}

const getSingleUser = async (id: string): Promise<Partial<IUser | null>> => {
  const result = await User.findById({ _id: id }).select(
    'firstName lastName profileImageUrl coverPhoto createdAt',
  )
  return result
}

export const userServices = {
  signUpUser,
  signInUser,
  getUserInfo,
  updateProfilePicture,
  updateCoverPhoto,
  getAllUser,
  getSingleUser,
}
