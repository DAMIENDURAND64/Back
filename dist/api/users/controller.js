"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAll_1 = __importDefault(require("./handlers/getAll"));
const getOne_1 = __importDefault(require("./handlers/getOne"));
const update_1 = __importDefault(require("./handlers/update"));
const delete_1 = __importDefault(require("./handlers/delete"));
const controller = { getAll: getAll_1.default, getOne: getOne_1.default, update: update_1.default, delete_: delete_1.default };
exports.default = controller;
