const express = require('express');
const router = express.Router();
const notes=require('../controller/notes')

router.get('/notes',notes.getnotes)

router.get('/notesDetail',notes.notesDetail)

router.get('/notesform',notes.notesform)

router.post('/postformdata',notes.postformdata)

router.get('/download',notes.downloadPdf)
module.exports=router;