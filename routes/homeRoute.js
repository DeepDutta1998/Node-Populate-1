const express=require('express');
const Route=express.Router();
const homeController=require('../controllers/homeController');

Route.get('/',homeController.index);
Route.get('/show-add-category',homeController.category);
Route.post('/add-category',homeController.addcategory);
Route.get('/show-add-subcategory',homeController.subcategory);
Route.post('/add-subcategory',homeController.addsubcategory);
Route.get('/show-add-product',homeController.product);
Route.post('/add-product',homeController.addproduct);


module.exports=Route;