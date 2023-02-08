import express from "express";
import api from "./api";
import connectDb from "./services/mongoose";
import cors from "cors";
import corsOptions from "./config/corsOptions";

const app = express();

connectDb()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", api);

export default app;
