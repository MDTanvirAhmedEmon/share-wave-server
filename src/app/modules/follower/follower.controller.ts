import { NextFunction, Request, Response } from 'express'
import { followerServices } from './follower.services'

const doFollow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const follower = req?.user?.id
    const following = req?.params?.id
    const result = await followerServices.doFollow(follower, following)

    res.status(200).json({
      success: true,
      message: 'followed successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const unFollow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const follower = req?.user?.id
    const following = req?.params?.id
    const result = await followerServices.unFollow(follower, following)

    res.status(200).json({
      success: true,
      message: 'unFollow successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getFollower = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const following = req?.user?.id
    const result = await followerServices.getFollower(following)

    res.status(200).json({
      success: true,
      message: 'get followers successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getFollowing = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const follower = req?.user?.id
    const result = await followerServices.getFollowing(follower)

    res.status(200).json({
      success: true,
      message: 'get followings successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const isFollowing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const follower = req?.user?.id
    const following = req?.params?.id
    const result = await followerServices.isFollowing(follower, following)

    res.status(200).json({
      success: true,
      message: 'isFollowing data retrieve successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const followerController = {
  doFollow,
  unFollow,
  getFollower,
  getFollowing,
  isFollowing,
}
