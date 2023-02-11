"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSecretKey = () => {
    const secret = process.env.JWT_SECRET || "";
    if (!secret) {
        throw new Error("Please provide a secret key, you likely forgot to set it in the .env file");
    }
    return secret;
};
exports.default = getSecretKey;
