const fs = require("fs");

let index = fs.readFileSync("node/index.html", "utf-8");
let data = JSON.parse(fs.readFileSync("node/data.json", "utf-8"));
let products = data.products;


exports.createProduct=(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}
exports.getAllProducts=(req,res)=>{
    res.json(products);
}

exports.getProduct=(req,res)=>{
    const id=+(req.params.id);
    const product=products.find((p)=>p.id===id)
    res.json(product);
}

exports.replaceProduct=(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id)
    products.splice(productIndex,1,{...req.body,id:id});
    res.status(201).json(products);
    
}

exports.updateProduct=(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1,{...product,...req.body});
    res.status(201).json(products);
    
}

exports.deleteproduct=(req,res)=>{
    const id=+(req.params.id);
    const productIndex=products.findIndex((p)=>p.id===id);
    const product=products[productIndex];
    products.splice(productIndex,1);
    res.status(201).json(product);
    
}