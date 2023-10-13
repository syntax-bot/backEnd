const express=require('express');

const fs = require("fs");

let index = fs.readFileSync("node/index.html", "utf-8");
let data = JSON.parse(fs.readFileSync("node/data.json", "utf-8"));
let products = data.products;

const server=express();

server.use(express.json());

const auth=(req,res,next)=>{

    console.log(req.body);
    if(req.body.password=='123'){
        next();
    }
    else{
        res.sendStatus(401);
    }

}
// server.use(auth);

//middlewares
server.use((req,res,next)=>{
    console.log(req.method,req.ip,req.hostname);


    //next will pass the control to next step otherwise code will stuck here
    next();

})

server.get('/login',auth,(req,res)=>{
    res.send('login complete');
})

server.get('/',auth,(req,res)=>{
    res.send('helloji GetRequest with auth');
})
server.post('/',(req,res)=>{
    res.send('helloji PostRequest');
})
server.patch('/',(req,res)=>{
    res.send('helloji PatchRequest');
})
server.put('/',(req,res)=>{
    res.send('helloji PUtRequest');
})
server.delete('/',(req,res)=>{
    res.send('helloji deleteRequest');
})




server.listen(8080,()=>{
    console.log("server started");
});
