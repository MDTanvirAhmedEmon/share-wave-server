import { NextFunction, Request, Response } from 'express'
import { LoveReactServices } from './loveReact.services'

const createLoveReact = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req?.user?.id
    const data = req.body

    const result = await LoveReactServices.createLoveReact(userId, data)

    res.status(200).json({
      success: true,
      message: 'loved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const loveReactController = {
  createLoveReact,
}
