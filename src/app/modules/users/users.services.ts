import { IUser } from './users.interface'
import { User } from './users.model'

const signUpUser = (data: IUser): Promise<IUser> => {
  const result = User.create(data)
  return result
}

export const userServices = {
  signUpUser,
}
