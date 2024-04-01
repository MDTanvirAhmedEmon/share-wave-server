import { NextFunction, Request, Response } from 'express'
import { userServices } from './users.services'
import config from '../../../config'

const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    console.log(userData)
    const { refreshToken, ...others } = await userServices.signUpUser(userData)

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.status(200).json({
      success: true,
      message: 'user sign up successfully',
      data: others,
    })
  } catch (error) {
    next(error)
  }
}

const signInUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const { refreshToken, ...others } = await userServices.signInUser(userData)

    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    }

    res.cookie('refreshToken', refreshToken, cookieOptions)

    res.status(200).json({
      success: true,
      message: 'user sign in successfully',
      data: others,
    })
  } catch (error) {
    next(error)
  }
}

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req?.user?.id
    const result = await userServices.getUserInfo(userId)

    res.status(200).json({
      success: true,
      message: 'get user info successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateProfilePicture = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const file = req.file
    const id = req?.user?.id
    console.log(id)
    const result = await userServices.updateProfilePicture(file, id)

    res.status(200).json({
      success: true,
      message: 'user profile picture updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const updateCoverPhoto = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const file = req.file
    const id = req?.user?.id
    const result = await userServices.updateCoverPhoto(file, id)

    res.status(200).json({
      success: true,
      message: 'user cover photo updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  signUpUser,
  signInUser,
  getUserInfo,
  updateProfilePicture,
  updateCoverPhoto,
}
