"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loveReactRouters = void 0;
const express_1 = __importDefault(require("express"));
const loveReact_controller_1 = require("./loveReact.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/love-react', (0, auth_1.default)(), loveReact_controller_1.loveReactController.createLoveReact);
exports.loveReactRouters = router;
