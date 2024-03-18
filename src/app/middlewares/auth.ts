import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../../helpers/jwtHelper'
import config from '../../config'
import { Secret } from 'jsonwebtoken'

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      throw new Error('You are not authorized')
    }

    let verifiedUser = null
    verifiedUser = verifyToken(token, config.secret as Secret)
    req.user = verifiedUser
    next()
  } catch (error) {
    next(error)
  }
}

export default auth
