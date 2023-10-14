const express = require("express");
const mongoose=require('mongoose');

main().catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("database connected");
}


const server = express();


//bodyparser
server.use(express.json());




const productRouter=require('./routes/products')
server.use('/products',productRouter.router);

const userRouter=require('./routes/user');
server.use('/users',userRouter.router);


server.listen(8080, () => {
  console.log("server started");
});
