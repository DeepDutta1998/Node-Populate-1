const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ProductSchema=new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    subCategory:{
        type:Schema.Types.ObjectId,
        ref:'Subcategory'
    },
    pName:{
        type:String,
        required:true
    },
    pPrice:{
        type:Number,
        required:true
    }
});

const ProductModel=new mongoose.model('Product',ProductSchema);
module.exports=ProductModel;