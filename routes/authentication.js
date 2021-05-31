const express = require('express');
const router = express.Router();
const login=require('../controller/authentication')



router.get('/login',login.login)

router.get('/signup',login.signup)

router.post('/login', login.postLogin);

router.post('/signup', login.postSignup);

router.get('/logout', login.postLogout);

module.exports=router