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
      message: 'user successfully signed up',
      data: others,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  signUpUser,
}
