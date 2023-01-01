const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SubcategorySchema=new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    subName:{
        type:String,
        required:true
    }
});

const SubcategoryModel=new mongoose.model('Subcategory',SubcategorySchema);
module.exports=SubcategoryModel;