import { Secret } from 'jsonwebtoken'
import config from '../../../config'
import { createAccessToken } from '../../../helpers/jwtHelper'
import { IUser } from './users.interface'
import { User } from './users.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signUpUser = async (data: IUser): Promise<any> => {
  const isExist = await User.findOne({ email: data.email })
  if (isExist) {
    throw new Error('User already exists')
  }

  const result = await User.create(data)

  const tokenData = {
    id: result._id,
    email: result.email,
  }
  const accessToken = createAccessToken(
    tokenData,
    config?.secret as Secret,
    config?.expires_in as string,
  )
  const refreshToken = createAccessToken(
    tokenData,
    config?.refresh_secret as Secret,
    config?.refresh_expires_in as string,
  )

  return {
    accessToken,
    refreshToken,
    result,
  }
}

export const userServices = {
  signUpUser,
}
