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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const config_1 = __importDefault(require("../../../config"));
const jwtHelper_1 = require("../../../helpers/jwtHelper");
const users_model_1 = require("./users.model");
const fileUploader_1 = require("../../../helpers/fileUploader");
const post_model_1 = require("../post/post.model");
const signUpUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield users_model_1.User.findOne({ email: data.email });
    if (isExist) {
        throw new Error('User already exists');
    }
    const result = yield users_model_1.User.create(data);
    const tokenData = {
        id: result._id,
        email: result.email,
    };
    const accessToken = (0, jwtHelper_1.createAccessToken)(tokenData, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.secret, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.expires_in);
    const refreshToken = (0, jwtHelper_1.createAccessToken)(tokenData, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.refresh_secret, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
        result,
    };
});
const signInUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield users_model_1.User.findOne({ email: data.email });
    if (!isExist) {
        throw new Error('User does not exists');
    }
    if ((isExist === null || isExist === void 0 ? void 0 : isExist.password) !== data.password) {
        throw new Error('password did not match');
    }
    const tokenData = {
        id: isExist === null || isExist === void 0 ? void 0 : isExist._id,
        email: isExist === null || isExist === void 0 ? void 0 : isExist.email,
    };
    const accessToken = (0, jwtHelper_1.createAccessToken)(tokenData, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.secret, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.expires_in);
    const refreshToken = (0, jwtHelper_1.createAccessToken)(tokenData, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.refresh_secret, config_1.default === null || config_1.default === void 0 ? void 0 : config_1.default.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
const getUserInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.User.findById({ _id: id });
    return result;
});
const updateProfilePicture = (file, id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
    const postData = {};
    const uploadedImage = yield (0, fileUploader_1.uploadToCloudinary)(file);
    const profilePicture = uploadedImage.secure_url;
    data.profileImageUrl = profilePicture;
    postData.imageUrl = profilePicture;
    postData.userId = id;
    const result = yield users_model_1.User.findByIdAndUpdate({ _id: id }, data, { new: true });
    if (result) {
        const postResult = yield post_model_1.Post.create(postData);
    }
    return result;
});
const updateCoverPhoto = (file, id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
    const postData = {};
    const uploadedImage = yield (0, fileUploader_1.uploadToCloudinary)(file);
    const coverPhoto = uploadedImage.secure_url;
    data.coverPhoto = coverPhoto;
    postData.imageUrl = coverPhoto;
    postData.userId = id;
    const result = yield users_model_1.User.findByIdAndUpdate({ _id: id }, data, { new: true });
    if (result) {
        const postResult = yield post_model_1.Post.create(postData);
    }
    return result;
});
exports.userServices = {
    signUpUser,
    signInUser,
    getUserInfo,
    updateProfilePicture,
    updateCoverPhoto,
};
