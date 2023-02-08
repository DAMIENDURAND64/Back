"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const signup_1 = __importDefault(require("./handlers/signup"));
const signin_1 = __importDefault(require("./handlers/signin"));
const controller = { signIn: signin_1.default, signUp: signup_1.default };
exports.default = controller;
