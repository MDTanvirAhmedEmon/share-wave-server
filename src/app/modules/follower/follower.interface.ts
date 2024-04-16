import { Model, Types } from 'mongoose'
import { IUser } from '../users/users.interface'

export type IFollowers = {
  follower: Types.ObjectId | IUser
  following: Types.ObjectId | IUser
}

export type FollowersModel = Model<IFollowers, Record<string, unknown>>
