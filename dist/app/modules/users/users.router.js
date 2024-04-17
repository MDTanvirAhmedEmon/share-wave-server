"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const fileUploader_1 = require("../../../helpers/fileUploader");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/sign-up', users_controller_1.userController.signUpUser);
router.post('/sign-in', users_controller_1.userController.signInUser);
router.get('/get-user-info', (0, auth_1.default)(), users_controller_1.userController.getUserInfo);
router.get('/get-all-users', (0, auth_1.default)(), users_controller_1.userController.getAllUser);
router.get('/get-single-user/:id', users_controller_1.userController.getSingleUser);
router.patch('/update-profile-picture', (0, auth_1.default)(), fileUploader_1.upload.single('file'), users_controller_1.userController.updateProfilePicture);
router.patch('/update-cover-photo', (0, auth_1.default)(), fileUploader_1.upload.single('file'), users_controller_1.userController.updateCoverPhoto);
exports.userRouters = router;
