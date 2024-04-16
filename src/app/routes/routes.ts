import express from 'express'
import { userRouters } from '../modules/users/users.router'
import { postRouters } from '../modules/post/post.router'
import { loveReactRouters } from '../modules/loveReact/loveReact.router'
import { commentRouters } from '../modules/comment/comment.router'
import { shareRouters } from '../modules/share/share.router'
import { followersRouters } from '../modules/follower/follower.router'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    element: userRouters,
  },
  {
    path: '/post',
    element: postRouters,
  },
  {
    path: '/react',
    element: loveReactRouters,
  },
  {
    path: '/comments',
    element: commentRouters,
  },
  {
    path: '/share',
    element: shareRouters,
  },
  {
    path: '/followers',
    element: followersRouters,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.element))

export const managedRouter = router
