"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareRouters = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const share_controller_1 = require("./share.controller");
const router = express_1.default.Router();
router.post('/share-post/', (0, auth_1.default)(), share_controller_1.shareController.sharePost);
router.delete('/share-post/:id', share_controller_1.shareController.deleteShare);
exports.shareRouters = router;
