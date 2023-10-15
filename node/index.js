const express = require("express");
const mongoose=require('mongoose');
const cors=require('cors');


main().catch((err)=>{console.log(err)});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("database connected");
}


const productRouter=require('./routes/products');
const userRouter=require('./routes/user');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.static('node/build'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
  //need to provide abolute path
  res.sendFile(__dirname+'/build/index.html');
})


server.listen(8080, () => {
  console.log("server started");
});
