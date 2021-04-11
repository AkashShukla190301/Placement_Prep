
const Notes=require('../models/notes')
const fs=require('fs')
const path=require('path');
const session = require('express-session');
let pdfDocument;



exports.getnotes=(req,res,next)=>{

    // console.log(req.session.email)
    // console.log(req.session.isLoggedIn)

    let notes={
        courseimage:["https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        coursename:["BCA","BSC_IT","BTECH","BSC_CS", "MCA"],
        coursedescription:["Bahelor Of Computer Appliations","Bachelor Of Information Security","Bachelor of Technology","Bachelor of Computer Science", "Master of Computer Application"],
        courselink:["/notesDetail"]

    }
    res.render('notes/notes',{
        courseobj:notes,
        isAdmin:req.session.email

    })
}

exports.notesDetail=(req,res,next)=>{

    
    const data=req.originalUrl.split('?')[1]
     Notes.find({ coursename:data })
     .then((result)=>{
         pdfDocument=result
         res.render("notes/notesDetail",{
            response:result
        })
     }).catch(err=>{
         console.log(err)
     })
}

exports.downloadPdf=(req,res,next)=>{
    const lopdfid=req.params.pdfid
    const pdf=pdfDocument[lopdfid].filename
    console.log(pdf)
   const pdfpath=path.join('',pdf)
   
    console.log(pdfpath)
    fs.readFile(pdfpath,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.setHeader('Content-Type','application/pdf')
            res.send(data)
        }
    })

}


exports.notesform=(req,res,next)=>{
    res.render("notes/notesform",{

    })
}


exports.postformdata=(req,res,next)=>{
    const coursename=req.body.coursename
    const filenames=req.file
    const semester=req.body.semester;
    const subjectnameform=req.body.subjectname

    const filepath=filenames.path

    const notes=new Notes({
        coursename:coursename,
        filename:filepath,
        semester:semester,
        subjectname:subjectnameform
    })

    notes.save()
    .then(result=>{
        console.log("success")
      res.redirect('/notes')
    }).catch(err=>{
        console.log(err)
    })
    

}