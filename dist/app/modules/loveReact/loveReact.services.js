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
exports.LoveReactServices = void 0
const loveReact_model_1 = require('./loveReact.model')
const createLoveReact = (userId, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const postId = data.postId
    data.userId = userId
    const isReacted = yield loveReact_model_1.LoveReact.findOne({
      postId: postId,
      userId: userId,
    })
    if (isReacted) {
      const result = yield loveReact_model_1.LoveReact.deleteOne({
        postId: postId,
        userId: userId,
      })
    }
    if (!isReacted) {
      const result = yield loveReact_model_1.LoveReact.create(data)
      return result
    }
  })
exports.LoveReactServices = {
  createLoveReact,
}
