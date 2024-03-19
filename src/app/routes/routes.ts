import express from 'express'
import { userRouters } from '../modules/users/users.router'
import { postRouters } from '../modules/post/post.router'

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
]

moduleRoutes.forEach(route => router.use(route.path, route.element))

export const managedRouter = router
