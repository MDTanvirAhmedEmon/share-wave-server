import express from 'express'
import auth from '../../middlewares/auth'
import { followerController } from './follower.controller'

const router = express.Router()

router.post('/:id', auth(), followerController.doFollow)
router.get('/get-follower', auth(), followerController.getFollower)
router.get('/get-following', auth(), followerController.getFollowing)
router.get('/is-following/:id', auth(), followerController.isFollowing)
router.delete('/unfollow/:id', auth(), followerController.unFollow)

export const followersRouters = router
