import { NextFunction, Request, Response } from 'express'
import { postServices } from './post.services'

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
    const data = JSON.parse(req.body.data)
    const id = req?.user?.id
    const result = await postServices.createPost(file, data, id)

    res.status(200).json({
      success: true,
      message: 'post created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getAllPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req?.user?.id
    const result = await postServices.getAllPost(userId)

    res.status(200).json({
      success: true,
      message: 'get all post successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getMyPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req?.user?.id
    const result = await postServices.getMyPost(id)

    res.status(200).json({
      success: true,
      message: 'get my post successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const postController = {
  createPost,
  getAllPost,
  getMyPost,
}
