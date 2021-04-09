const express = require('express');
const router = express.Router();
const notes=require('../controller/notes')

router.get('/notes',notes.getnotes)

module.exports=router;