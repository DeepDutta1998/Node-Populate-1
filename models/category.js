const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CategorySchema=new Schema({
    cName:{
        type:String,
        required:true
    },
    cType:{
        type:String,
        required:true
    }
})

const CategoryModel=new mongoose.model('Category',CategorySchema);
module.exports=CategoryModel;