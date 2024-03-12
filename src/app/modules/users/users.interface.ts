import { Model } from 'mongoose'

export type IUser = {
  firstName: string
  lastName: string
  email: string
  password: string
  phone: number
  gender: string
  profileImageUrl: string
  dateOfBirth: Date
  address: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
