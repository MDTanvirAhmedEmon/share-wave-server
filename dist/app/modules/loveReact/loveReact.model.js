"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoveReact = void 0;
const mongoose_1 = require("mongoose");
const loveReactSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    reaction: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.LoveReact = (0, mongoose_1.model)('LoveReact', loveReactSchema);
