const express = require('express');
const router = express.Router();
const login=require('../controller/authentication')

router.get('/login',login.login)

router.get('/signup',login.signup)

module.exports=router