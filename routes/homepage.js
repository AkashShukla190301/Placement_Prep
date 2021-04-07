const express = require('express');
const router = express.Router();
const homecontroller=require("../controller/index")


router.get('/', homecontroller.index)


module.exports=router

