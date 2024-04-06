import express from 'express'
import { loveReactController } from './loveReact.controller'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post('/love-react', auth(), loveReactController.createLoveReact)

export const loveReactRouters = router
