'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Share = void 0
const mongoose_1 = require('mongoose')
const shareSchema = new mongoose_1.Schema(
  {
    userId: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    ownerId: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    postId: {
      type: mongoose_1.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
exports.Share = (0, mongoose_1.model)('Share', shareSchema)
