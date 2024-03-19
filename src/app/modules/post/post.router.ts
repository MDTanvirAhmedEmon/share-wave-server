import express from 'express'
import { postController } from './post.controller'
import { upload } from '../../../helpers/fileUploader'

const router = express.Router()

router.post('/create-post', upload.single('file'), postController.createPost)

export const postRouters = router
