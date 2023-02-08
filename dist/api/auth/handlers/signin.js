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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
const user_1 = require("../../../models/user");
const auth_1 = __importDefault(require("../../../utils/auth"));
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield user_1.User.findOne({ email }).exec();
        if (!user) {
            return res.status(404).send({ message: "The username does not exist" });
        }
        if (!bcryptjs_1.default.compareSync(password, user.password)) {
            return res.status(403).send({ message: "The password is invalid" });
        }
        const secret = (0, auth_1.default)();
        // password match
        const _a = user.toObject(), { password: _ } = _a, userWithoutPassword = __rest(_a, ["password"]);
        const token = (0, jsonwebtoken_1.sign)(Object.assign({}, userWithoutPassword), secret);
        res.setHeader("authorization", `Bearer ${token}`);
        return res.status(200).json(Object.assign({}, userWithoutPassword));
    }
    catch (error) {
        res.status(500).send({ message: error });
        next(error);
    }
});
exports.default = signIn;
