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
exports.followerServices = void 0
const follower_model_1 = require('./follower.model')
const doFollow = (follower, following) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_model_1.Followers.create({
      follower,
      following,
    })
    return result
  })
const unFollow = (follower, following) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_model_1.Followers.deleteOne({
      follower: follower,
      following: following,
    })
    return result
  })
const getFollower = following =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_model_1.Followers.find({
      following: following,
    }).populate('follower', 'firstName lastName profileImageUrl')
    return result
  })
const getFollowing = follower =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield follower_model_1.Followers.find({
      follower: follower,
    }).populate('following', 'firstName lastName profileImageUrl')
    return result
  })
exports.followerServices = {
  doFollow,
  unFollow,
  getFollower,
  getFollowing,
}
