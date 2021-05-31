const express = require('express');
const router = express.Router();
const errorcontroller=require("../controller/error")
const isAuth=require('../middleware/route-protection')

router.get("*",isAuth, errorcontroller.error)


module.exports=router