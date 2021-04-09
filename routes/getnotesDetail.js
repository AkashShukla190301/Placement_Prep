const express = require('express');
const router = express.Router();
const notes=require('../controller/notesDetail')

router.get('/notesDetail',notes.notesDetail)

module.exports=router;