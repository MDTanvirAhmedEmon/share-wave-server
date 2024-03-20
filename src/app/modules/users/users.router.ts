import express from 'express'
import { userController } from './users.controller'

const router = express.Router()

router.post('/sign-up', userController.signUpUser)
router.post('/sign-in', userController.signInUser)

export const userRouters = router
