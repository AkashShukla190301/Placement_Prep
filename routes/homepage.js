const express = require('express');
const router = express.Router();
const homecontroller=require("../controller/index")
const isAuth=require('../middleware/route-protection')

router.get('/',homecontroller.index)

router.get('/allproducts',isAuth,homecontroller.getallproducts)

module.exports=router

