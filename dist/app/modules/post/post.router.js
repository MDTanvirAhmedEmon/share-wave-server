"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouters = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const fileUploader_1 = require("../../../helpers/fileUploader");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-post', (0, auth_1.default)(), fileUploader_1.upload.single('file'), post_controller_1.postController.createPost);
router.get('/all-post', (0, auth_1.default)(), post_controller_1.postController.getAllPost);
router.get('/my-post', (0, auth_1.default)(), post_controller_1.postController.getMyPost);
router.get('/user-my-post/:id', post_controller_1.postController.getUserMyPost);
router.get('/single-post/:id', post_controller_1.postController.getSinglePost);
exports.postRouters = router;
