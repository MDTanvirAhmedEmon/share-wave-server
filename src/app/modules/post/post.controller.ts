import { NextFunction, Request, Response } from 'express'
import { postServices } from './post.services'

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
    const data = JSON.parse(req.body.data)
    const result = await postServices.createPost(file, data)

    res.status(200).json({
      success: true,
      message: 'post created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const postController = {
  createPost,
}
