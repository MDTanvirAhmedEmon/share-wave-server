import { Schema, model } from 'mongoose'
import { FollowersModel, IFollowers } from './follower.interface'

const followersSchema = new Schema<IFollowers, FollowersModel>(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Followers = model<IFollowers, FollowersModel>(
  'Followers',
  followersSchema,
)
