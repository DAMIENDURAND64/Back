"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const mongoose_1 = __importDefault(require("./services/mongoose"));
(0, mongoose_1.default)()
    .then(() => console.log("Db connected"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/v1", api_1.default);
/* app.get("/users", async (req, res) => {
  console.log("ICI");
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}); */
exports.default = app;
