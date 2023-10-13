const express=require('express');

const fs = require("fs");

let index = fs.readFileSync("node/index.html", "utf-8");
let data = JSON.parse(fs.readFileSync("node/data.json", "utf-8"));
let products = data.products;

const server=express();

server.use(express.json());  //body parser


//CRUD api

//create api (post)
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
})


//read api
server.get('/products',(req,res)=>{
    res.json(products);
})
server.get('/products/:id',(req,res)=>{
    const id=+(req.params.id);
    const product=products.find((p)=>p.id===id)
    res.json(product);
})




//update (put,patch)

//overwrite in put
server.put('/products/:id',(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id)
    products.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json(products);
    
})

//update only those products
server.patch('/products/:id',(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.status(201).json(products);
    
})




//delete
server.delete('/products/:id',(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json(product);
    
})















server.listen(8080,()=>{
    console.log("server started");
});
