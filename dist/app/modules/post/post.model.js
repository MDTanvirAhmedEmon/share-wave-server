'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Post = void 0
const mongoose_1 = require('mongoose')
const postSchema = new mongoose_1.Schema(
  {
    text: {
      type: String,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
exports.Post = (0, mongoose_1.model)('Post', postSchema)
