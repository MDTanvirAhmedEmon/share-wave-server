import express from 'express'
import { postController } from './post.controller'
import { upload } from '../../../helpers/fileUploader'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/create-post',
  auth(),
  upload.single('file'),
  postController.createPost,
)
router.get('/all-post', auth(), postController.getAllPost)
router.get('/my-post', auth(), postController.getMyPost)
router.get('/single-post/:id', postController.getSinglePost)

export const postRouters = router
