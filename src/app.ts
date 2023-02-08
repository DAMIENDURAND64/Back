import express from "express";
import api from "./api";
import connectDb from "./services/mongoose";

connectDb()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", api);

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

export default app;
