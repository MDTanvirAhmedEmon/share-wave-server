"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouters = void 0;
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("./comment.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/do-comment', (0, auth_1.default)(), comment_controller_1.commentController.createComment);
router.get('/get-post-comment/:id', comment_controller_1.commentController.getAllComment);
exports.commentRouters = router;
