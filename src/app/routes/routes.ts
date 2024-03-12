import express from 'express'
import { userRouters } from '../modules/users/users.router'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    element: userRouters,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.element))

export const managedRouter = router
