'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.followersRouters = void 0
const express_1 = __importDefault(require('express'))
const auth_1 = __importDefault(require('../../middlewares/auth'))
const follower_controller_1 = require('./follower.controller')
const router = express_1.default.Router()
router.post(
  '/:id',
  (0, auth_1.default)(),
  follower_controller_1.followerController.doFollow,
)
router.get(
  '/get-follower',
  (0, auth_1.default)(),
  follower_controller_1.followerController.getFollower,
)
router.get(
  '/get-following',
  (0, auth_1.default)(),
  follower_controller_1.followerController.getFollowing,
)
router.delete(
  '/unfollow/:id',
  (0, auth_1.default)(),
  follower_controller_1.followerController.unFollow,
)
exports.followersRouters = router
