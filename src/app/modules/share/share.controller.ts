import { NextFunction, Request, Response } from 'express'
import { shareServices } from './share.services'

const sharePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req?.user?.id
    const data = req.body
    const result = await shareServices.sharePost(userId, data)

    res.status(200).json({
      success: true,
      message: 'shared post successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const shareController = {
  sharePost,
}
