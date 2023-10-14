const mongoose=require('mongoose');
const {Schema,model,Types}=mongoose;
exports.Types=Types;

const productSchema=new Schema({
  title: {type:String,required:true},
  description: String,
  price:{type:Number,min:[0,'price less than 0'],required:true},
  discountPercentage:{type:Number,min:[0,'negative discount not possible'],max:[100,"discount more than 100 not possible"]},
  rating:{type:Number,min:[0,'negative rating not possible'],max:[5,"provide rating under 5"],default:0},
  stock:{type:Number,min:[0,'negative stock not possible'],required:true},
  brand:{type:String,required:true},
  category:{type:String,required:true},
  thumbnail:{type:String,required:true},
  images: [String]
})


exports.Product=model('Product',productSchema);


