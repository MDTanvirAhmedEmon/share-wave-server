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
exports.postController = void 0
const post_services_1 = require('./post.services')
const createPost = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a
    try {
      const file = req.file
      const data = JSON.parse(req.body.data)
      const id =
        (_a = req === null || req === void 0 ? void 0 : req.user) === null ||
        _a === void 0
          ? void 0
          : _a.id
      const result = yield post_services_1.postServices.createPost(
        file,
        data,
        id,
      )
      res.status(200).json({
        success: true,
        message: 'post created successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getAllPost = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _b
    try {
      const userId =
        (_b = req === null || req === void 0 ? void 0 : req.user) === null ||
        _b === void 0
          ? void 0
          : _b.id
      const result = yield post_services_1.postServices.getAllPost(userId)
      res.status(200).json({
        success: true,
        message: 'get all post successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getMyPost = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _c
    try {
      const id =
        (_c = req === null || req === void 0 ? void 0 : req.user) === null ||
        _c === void 0
          ? void 0
          : _c.id
      const result = yield post_services_1.postServices.getMyPost(id)
      res.status(200).json({
        success: true,
        message: 'get my post successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getUserMyPost = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _d
    try {
      const id =
        (_d = req === null || req === void 0 ? void 0 : req.params) === null ||
        _d === void 0
          ? void 0
          : _d.id
      const result = yield post_services_1.postServices.getMyPost(id)
      res.status(200).json({
        success: true,
        message: 'get my post successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
const getSinglePost = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const id = req.params.id
      const result = yield post_services_1.postServices.getSinglePost(id)
      res.status(200).json({
        success: true,
        message: 'get single post successfully',
        data: result,
      })
    } catch (error) {
      next(error)
    }
  })
exports.postController = {
  createPost,
  getAllPost,
  getMyPost,
  getSinglePost,
  getUserMyPost,
}
