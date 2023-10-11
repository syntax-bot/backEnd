const module1=require('./module1.js');



//downloading module from node
const fs=require('fs');

// const txt=fs.readFileSync('demo.txt','utf-8');
// console.log(txt);


//node callbacks have perticular format 
//first err for error then pass anything

fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt);
})
console.log("helloji");


console.log(module1.sum(34));