import express from 'express'
import { userController } from './users.controller'
import { upload } from '../../../helpers/fileUploader'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post('/sign-up', userController.signUpUser)
router.post('/sign-in', userController.signInUser)
router.get('/get-user-info', auth(), userController.getUserInfo)
router.patch(
  '/update-profile-picture',
  auth(),
  upload.single('file'),
  userController.updateProfilePicture,
)
router.patch(
  '/update-cover-photo',
  auth(),
  upload.single('file'),
  userController.updateCoverPhoto,
)

export const userRouters = router
