const express = require('express');
const router = express.Router();
const chatController=require("../controller/chat")



router.get('/chat',chatController.chatdata)
router.get('/placement',chatController.placment)

module.exports=router

