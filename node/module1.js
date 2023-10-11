//every file in node is a module 
const a=5;

function sum(b){
    return a+b;
}

//can't access this fun outside // protected by module //accessed by export


//export is kind of a object in node
exports.sum=sum;