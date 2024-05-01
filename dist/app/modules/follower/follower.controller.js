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
exports.followerController = void 0
const follower_services_1 = require('./follower.services')
const doFollow = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b
    try {
      const follower =
        (_a = req === null || req === void 0 ? void 0 : req.user) === null ||
        _a === void 0
          ? void 0
          : _a.id
      const following =
        (_b = req === null || req === void 0 ? void 0 : req.params) === null ||
        _b === void 0
          ? void 0
          : _b.id
      const result = yield follower_services_1.followerServices.doFollow(
        follower,
        following,
      )
      res.status(200).json({
        success: true,
        message: 'followed successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const unFollow = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d
    try {
      const follower =
        (_c = req === null || req === void 0 ? void 0 : req.user) === null ||
        _c === void 0
          ? void 0
          : _c.id
      const following =
        (_d = req === null || req === void 0 ? void 0 : req.params) === null ||
        _d === void 0
          ? void 0
          : _d.id
      const result = yield follower_services_1.followerServices.unFollow(
        follower,
        following,
      )
      res.status(200).json({
        success: true,
        message: 'unFollow successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getFollower = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _e
    try {
      const following =
        (_e = req === null || req === void 0 ? void 0 : req.user) === null ||
        _e === void 0
          ? void 0
          : _e.id
      const result =
        yield follower_services_1.followerServices.getFollower(following)
      res.status(200).json({
        success: true,
        message: 'get followers successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getFollowing = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _f
    try {
      const follower =
        (_f = req === null || req === void 0 ? void 0 : req.user) === null ||
        _f === void 0
          ? void 0
          : _f.id
      const result =
        yield follower_services_1.followerServices.getFollowing(follower)
      res.status(200).json({
        success: true,
        message: 'get followings successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
exports.followerController = {
  doFollow,
  unFollow,
  getFollower,
  getFollowing,
}
