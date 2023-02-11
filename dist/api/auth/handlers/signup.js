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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../../../models/user");
const auth_1 = __importDefault(require("../../../utils/auth"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, lastName, firstName, email } = req.body;
    try {
        const hashedPassword = bcryptjs_1.default.hashSync(password, 10);
        const userModel = new user_1.User({
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: hashedPassword,
        });
        const newUser = (yield userModel.save()).toObject();
        const { password: removedPassword } = newUser, userWithoutPassword = __rest(newUser, ["password"]);
        const secret = (0, auth_1.default)();
        const token = jsonwebtoken_1.default.sign(userWithoutPassword, secret, {
            expiresIn: "10m",
        });
        res.setHeader("Authorization", `Bearer ${token}`);
        res.status(200).json(userWithoutPassword);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});
exports.default = signUp;
