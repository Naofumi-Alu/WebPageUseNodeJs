
const express = require('express');
const router = express.Router();

//Routes
router.get('/',(req,res)=>{
    res.render('index.ejs',{title:'first Web Site'});
 
 });

 router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'first Web Site'});
 
 });




 module.exports= router;