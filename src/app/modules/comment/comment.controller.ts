import { NextFunction, Request, Response } from 'express'
import { commentServices } from './comment.services'

const createComment = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req?.user?.id
    const data = req.body

    const result = await commentServices.createComment(userId, data)

    res.status(200).json({
      success: true,
      message: 'commented successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const commentController = {
  createComment,
}
