import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

export const createAccessToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expiresTime: string,
) => {
  return jwt.sign(payload, secret, { expiresIn: expiresTime })
}

export const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload
}
