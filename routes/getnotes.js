const express = require('express');
const router = express.Router();
const notes=require('../controller/notes')
const isAuth=require('../middleware/route-protection')

router.get('/notes',isAuth,notes.getnotes)

router.get('/notesDetail',isAuth,notes.notesDetail)

router.get('/notesform',isAuth,notes.notesform)

router.post('/postformdata',isAuth,notes.postformdata)

router.get('/download/:pdfid',isAuth,notes.downloadPdf)

module.exports=router;