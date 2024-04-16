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
exports.commentController = void 0;
const comment_services_1 = require("./comment.services");
const createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id;
        const data = req.body;
        const result = yield comment_services_1.commentServices.createComment(userId, data);
        res.status(200).json({
            success: true,
            message: 'commented successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getAllComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postId = req.params.id;
        const result = yield comment_services_1.commentServices.getAllComment(postId);
        res.status(200).json({
            success: true,
            message: 'get all comment successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.commentController = {
    createComment,
    getAllComment,
};
