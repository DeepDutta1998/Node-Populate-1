const express=require('express');
const path=require('path');
const flash=require('connect-flash');
const CategoryModel=require('../models/category');
const SubCategoryModel=require('../models/subCategory');
const ProductModel=require('../models/product');


//index page controller.
exports.index=(req,res)=>{
    ProductModel.find().populate("subCategory").populate("category").exec((err,data)=>{
        if(!err){
            console.log(data);
            res.render('index',{
                title:"Index | Page",
                displaydata:data,
                message:req.flash('message')
            })
        }
    })
}


//show add category page controller.
exports.category=(req,res)=>{
    res.render('addCategory',{
        title:"Add | Category"
    })
}

//store category data controller.
exports.addcategory=(req,res)=>{
    CategoryModel({
        cName:req.body.name,
        cType:req.body.type
    }).save().then(result=>{
        console.log('Category added...');
        req.flash('message','Category Added')
        res.redirect('/show-add-subcategory');
    }).catch(error=>{
        console.log(error);
    })
}

//show add subcategory page controller.
exports.subcategory=(req,res)=>{
    CategoryModel.find().then(result=>{
        res.render('addSubCategory',{
            title:"Add | Subcategory",
            categories:result,
            message:req.flash('message')
        })
    }).catch(error=>{
        console.log(error);
    })
}

//store subcategory data controller.
exports.addsubcategory=(req,res)=>{
    SubCategoryModel({
        category:req.body.category,
        subName:req.body.name
    }).save().then(result=>{
        console.log(`Sub-Category added...`);
        req.flash('message','Sub-Category Added')
        res.redirect('/show-add-product');
    }).catch(error=>{
        console.log(error);
    })
}

//show add product page controller.
exports.product=(req,res)=>{
    CategoryModel.find().then(result1=>{
        SubCategoryModel.find().then(result2=>{
            res.render('addProduct',{
                title:'Add | Products',
                displaydata1:result1,
                displaydata2:result2,
                message:req.flash('message')
            })
        })
    })
}

//store products data controller.
exports.addproduct=(req,res)=>{
    ProductModel({
        category:req.body.category,
        subCategory:req.body.subcategory,
        pName:req.body.name,
        pPrice:req.body.price
    }).save().then(result=>{
        console.log(`Product added...`);
        req.flash('message','Product Added')
        res.redirect('/');
    }).catch(error=>{
        console.log(error);
    })
}