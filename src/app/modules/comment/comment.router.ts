import express from 'express'
import { commentController } from './comment.controller'
import auth from '../../middlewares/auth'
const router = express.Router()

router.post('/do-comment', auth(), commentController.createComment)

export const commentRouters = router
