'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Followers = void 0
const mongoose_1 = require('mongoose')
const followersSchema = new mongoose_1.Schema(
  {
    follower: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    following: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
exports.Followers = (0, mongoose_1.model)('Followers', followersSchema)
