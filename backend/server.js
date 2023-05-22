import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";
require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

// connect to MongoBd
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));
//routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = 4000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
