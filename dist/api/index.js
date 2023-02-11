"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./auth/routes"));
const routes_2 = __importDefault(require("./users/routes"));
const checkToken_1 = __importDefault(require("./middlewares/auth/checkToken"));
const router = (0, express_1.Router)();
router.use("/auth", routes_1.default);
router.use(checkToken_1.default);
router.use("/users", routes_2.default);
exports.default = router;
