'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.postServices = void 0
const fileUploader_1 = require('../../../helpers/fileUploader')
const post_model_1 = require('./post.model')
const loveReact_model_1 = require('../loveReact/loveReact.model')
const share_model_1 = require('../share/share.model')
const createPost = (file, data, id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const uploadedImage = yield (0, fileUploader_1.uploadToCloudinary)(file)
    const imageUrl = uploadedImage.secure_url
    data.imageUrl = imageUrl
    data.userId = id
    const result = yield post_model_1.Post.create(data)
    return result
  })
const getAllPost = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.Post.find().populate(
      'userId',
      'firstName lastName profileImageUrl',
    )
    const postsWithReactions = []
    for (const post of posts) {
      const reactions = yield loveReact_model_1.LoveReact.find({
        postId: post._id,
      })
      const userAlreadyReacted = reactions.some(
        reaction =>
          (reaction === null || reaction === void 0
            ? void 0
            : reaction.userId.toString()) === id,
      )
      const postWithReactions = Object.assign(
        Object.assign({}, post.toObject()),
        { reactions, userAlreadyReacted },
      )
      postsWithReactions.push(postWithReactions)
    }
    return postsWithReactions
  })
const getMyPost = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield post_model_1.Post.find({ userId: id })
      .populate('userId', 'firstName lastName profileImageUrl')
      .sort({ createdAt: 'desc' })
    const sharedPosts = yield share_model_1.Share.find({ userId: id })
      .populate('userId', 'firstName lastName profileImageUrl')
      .populate('ownerId', 'firstName lastName profileImageUrl')
      .populate('postId')
      .sort({ createdAt: 'desc' })
    const postsWithReactions = []
    for (const post of posts) {
      const reactions = yield loveReact_model_1.LoveReact.find({
        postId: post._id,
      })
      const userAlreadyReacted = reactions.some(
        reaction =>
          (reaction === null || reaction === void 0
            ? void 0
            : reaction.userId.toString()) === id,
      )
      const postWithReactions = Object.assign(
        Object.assign({}, post.toObject()),
        { reactions, userAlreadyReacted },
      )
      postsWithReactions.push(postWithReactions)
    }
    for (const post of sharedPosts) {
      const sharedPost = post.postId
      const reactions = yield loveReact_model_1.LoveReact.find({
        postId: sharedPost._id,
      })
      const userAlreadyReacted = reactions.some(
        reaction =>
          (reaction === null || reaction === void 0
            ? void 0
            : reaction.userId.toString()) === id,
      )
      const postWithReactions = Object.assign(
        Object.assign({}, post.toObject()),
        { reactions, userAlreadyReacted },
      )
      postsWithReactions.push(postWithReactions)
    }
    postsWithReactions.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    return postsWithReactions
  })
const getSinglePost = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.Post.findById({ _id: id })
    return result
  })
exports.postServices = {
  createPost,
  getAllPost,
  getMyPost,
  getSinglePost,
}
