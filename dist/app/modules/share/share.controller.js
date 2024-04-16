"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareController = void 0;
const share_services_1 = require("./share.services");
const sharePost = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id;
        const data = req.body;
        const result = yield share_services_1.shareServices.sharePost(userId, data);
        res.status(200).json({
            success: true,
            message: 'shared post successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteShare = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield share_services_1.shareServices.deleteShare(id);
        res.status(200).json({
            success: true,
            message: 'share deleted successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.shareController = {
    sharePost,
    deleteShare,
};
