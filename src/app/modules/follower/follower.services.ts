/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFollowers } from './follower.interface'
import { Followers } from './follower.model'

const doFollow = async (
  follower: string,
  following: string,
): Promise<IFollowers> => {
  const result = await Followers.create({ follower, following })
  return result
}

const unFollow = async (follower: string, following: string): Promise<any> => {
  const result = await Followers.deleteOne({
    follower: follower,
    following: following,
  })
  return result
}

const getFollower = async (following: string): Promise<IFollowers[]> => {
  const result = await Followers.find({ following: following }).populate(
    'follower',
    'firstName lastName profileImageUrl',
  )
  return result
}

const getFollowing = async (follower: string): Promise<IFollowers[]> => {
  const result = await Followers.find({ follower: follower }).populate(
    'following',
    'firstName lastName profileImageUrl',
  )
  return result
}

export const followerServices = {
  doFollow,
  unFollow,
  getFollower,
  getFollowing,
}
