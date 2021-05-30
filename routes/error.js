const express = require('express');
const router = express.Router();
const errorcontroller=require("../controller/error")

router.get("*", errorcontroller.error)


module.exports=router