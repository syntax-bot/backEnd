const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const path = require('path');

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}

const productRouter = require("./routes/products");
const userRouter = require("./routes/user");



const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded());
server.use(express.static(path.resolve(__dirname,"build")));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  //need to provide abolute path
  res.sendFile(path.resolve(__dirname,"build","index.html"));
});

server.listen(8080, () => {
  console.log("server started");
});