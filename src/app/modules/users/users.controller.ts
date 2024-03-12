import { Request, Response } from 'express'
import { userServices } from './users.services'

const signUpUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.signUpUser(userData)
    res.status(200).json({
      success: true,
      message: 'user successfully signed up',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'failed to sign up',
    })
  }
}

export const userController = {
  signUpUser,
}
