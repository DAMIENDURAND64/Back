import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const client = new MongoClient(process.env.MONGO_URL as string);

async function main() {
  await client.connect();
  console.log("connection OK");
  const db = client.db("my_Test_to_StrategIn");
  const collection = db.collection("users");
  const insertUsers = await collection.insertMany([
    { email: "aaa.zzz@gmail.com", password: "azerty" },
    { email: "qqq.sss@gmail.com", password: "qwerty" },
  ]);
  console.log("users inseres =>", insertUsers);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to homePage");
});

export default app;
