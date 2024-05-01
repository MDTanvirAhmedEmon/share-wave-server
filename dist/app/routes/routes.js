'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.managedRouter = void 0
const express_1 = __importDefault(require('express'))
const users_router_1 = require('../modules/users/users.router')
const post_router_1 = require('../modules/post/post.router')
const loveReact_router_1 = require('../modules/loveReact/loveReact.router')
const comment_router_1 = require('../modules/comment/comment.router')
const share_router_1 = require('../modules/share/share.router')
const follower_router_1 = require('../modules/follower/follower.router')
const router = express_1.default.Router()
const moduleRoutes = [
  {
    path: '/users',
    element: users_router_1.userRouters,
  },
  {
    path: '/post',
    element: post_router_1.postRouters,
  },
  {
    path: '/react',
    element: loveReact_router_1.loveReactRouters,
  },
  {
    path: '/comments',
    element: comment_router_1.commentRouters,
  },
  {
    path: '/share',
    element: share_router_1.shareRouters,
  },
  {
    path: '/followers',
    element: follower_router_1.followersRouters,
  },
]
moduleRoutes.forEach(route => router.use(route.path, route.element))
exports.managedRouter = router
