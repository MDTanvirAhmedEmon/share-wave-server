import express from 'express'
import auth from '../../middlewares/auth'
import { shareController } from './share.controller'

const router = express.Router()

router.post('/share-post/', auth(), shareController.sharePost)
router.delete('/share-post/:id', shareController.deleteShare)

export const shareRouters = router
