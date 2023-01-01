const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const flash=require('connect-flash');
const session=require('express-session');
const app=express();

//urlencoded(buffer data)
app.use(express.urlencoded({
    extended:true
}));

//set flash.
app.use(session({
    secret:'secret',cookie:{maxAge:60000},resave:false,saveUninitialized:false
}));
app.use(flash());

//set view engine.
app.set('view engine','ejs');
app.set('views','views');

//set a static folder.
app.use(express.static(path.join(__dirname,'public')));

//set router connection.
const homeRoute=require('./routes/homeRoute');
app.use(homeRoute);

//connect mongodb.
const dbDriver =
  'mongodb+srv://lofi:bLZgeMO7Qs872Qqx@cluster0.rmvujxb.mongodb.net/populate'

//connect ports.
const port=process.env.PORT || 3030
mongoose.connect(dbDriver,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(result=>{
    app.listen(port,()=>{
        console.log(`Connection Successful`);
        console.log(`Server running at http://localhost:${port}`);
    })
});