const express = require("express");
const server = express();

server.use(express.json());

const productRouter=require('./routes/products')
server.use('/products',productRouter.router);

const userRouter=require('./routes/user');
server.use('/users',userRouter.router);


server.listen(8080, () => {
  console.log("server started");
});
