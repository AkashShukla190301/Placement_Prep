const express = require('express');
const router = express.Router();
const chatController=require("../controller/chat")
const isAuth=require('../middleware/route-protection')



router.get('/chat',isAuth,chatController.chatdata)
router.get('/placement',isAuth,chatController.placment)

module.exports=router

