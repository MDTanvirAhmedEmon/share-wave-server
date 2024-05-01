'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.verifyToken = exports.createAccessToken = void 0
const jsonwebtoken_1 = __importDefault(require('jsonwebtoken'))
const createAccessToken = (payload, secret, expiresTime) => {
  return jsonwebtoken_1.default.sign(payload, secret, {
    expiresIn: expiresTime,
  })
}
exports.createAccessToken = createAccessToken
const verifyToken = (token, secret) => {
  return jsonwebtoken_1.default.verify(token, secret)
}
exports.verifyToken = verifyToken
