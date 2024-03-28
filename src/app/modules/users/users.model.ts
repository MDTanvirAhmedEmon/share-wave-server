import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './users.interface'

const userSchema = new Schema<IUser, UserModel>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
    },
    coverPhoto: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const User = model<IUser, UserModel>('User', userSchema)
