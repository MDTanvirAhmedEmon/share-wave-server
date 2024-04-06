import express from 'express'
import { userRouters } from '../modules/users/users.router'
import { postRouters } from '../modules/post/post.router'
import { loveReactRouters } from '../modules/loveReact/loveReact.router'
import { commentRouters } from '../modules/comment/comment.router'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.element))

export const managedRouter = router
