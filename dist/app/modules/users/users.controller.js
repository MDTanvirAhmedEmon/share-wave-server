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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_services_1 = require("./users.services");
const config_1 = __importDefault(require("../../../config"));
const signUpUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log(userData);
        const _a = yield users_services_1.userServices.signUpUser(userData), { refreshToken } = _a, others = __rest(_a, ["refreshToken"]);
        const cookieOptions = {
            secure: config_1.default.env === 'production',
            httpOnly: true,
        };
        res.cookie('refreshToken', refreshToken, cookieOptions);
        res.status(200).json({
            success: true,
            message: 'user sign up successfully',
            data: others,
        });
    }
    catch (error) {
        next(error);
    }
});
const signInUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const _b = yield users_services_1.userServices.signInUser(userData), { refreshToken } = _b, others = __rest(_b, ["refreshToken"]);
        const cookieOptions = {
            secure: config_1.default.env === 'production',
            httpOnly: true,
        };
        res.cookie('refreshToken', refreshToken, cookieOptions);
        res.status(200).json({
            success: true,
            message: 'user sign in successfully',
            data: others,
        });
    }
    catch (error) {
        next(error);
    }
});
const getUserInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const userId = (_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.id;
        const result = yield users_services_1.userServices.getUserInfo(userId);
        res.status(200).json({
            success: true,
            message: 'get user info successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateProfilePicture = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const file = req.file;
        const id = (_d = req === null || req === void 0 ? void 0 : req.user) === null || _d === void 0 ? void 0 : _d.id;
        console.log(id);
        const result = yield users_services_1.userServices.updateProfilePicture(file, id);
        res.status(200).json({
            success: true,
            message: 'user profile picture updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCoverPhoto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    try {
        const file = req.file;
        const id = (_e = req === null || req === void 0 ? void 0 : req.user) === null || _e === void 0 ? void 0 : _e.id;
        const result = yield users_services_1.userServices.updateCoverPhoto(file, id);
        res.status(200).json({
            success: true,
            message: 'user cover photo updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.userController = {
    signUpUser,
    signInUser,
    getUserInfo,
    updateProfilePicture,
    updateCoverPhoto,
};
