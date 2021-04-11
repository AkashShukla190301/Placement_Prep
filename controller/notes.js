
const Notes=require('../models/notes')
const fs=require('fs')
const path=require('path')
let pdfDocument;

exports.getnotes=(req,res,next)=>{
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
        courseobj:notes
    })
}

exports.notesDetail=(req,res,next)=>{

    
    const data=req.originalUrl.split('?')[1]
     Notes.findOne({ coursename:data })
     .then((result)=>{
         pdfDocument=result.filename
         console.log(result)
         res.render("notes/notesDetail",{
            coursename:result.coursename,
            filename:result.filename,
            semester:result.semester,
            subjectname:result.subjectname
        })
     }).catch(err=>{
         console.log(err)
     })
}

exports.downloadPdf=(req,res,next)=>{
    const pdf=pdfDocument+'.pdf'
   const pdfpath=path.join('',pdf)
   
    console.log(pdfpath)
    fs.readFile(pdfpath,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
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
    const filename=req.file
    const semester=req.body.semester;
    const subjectname=req.body.subjectname

    const filepath=filename.path

    const notes=new Notes({
        coursename:coursename,
        filename:filepath,
        semester:semester,
        subjectname:subjectname
    })

    notes.save()
    .then(result=>{
        console.log("success")
        res.redirect('/notesDetail')
    }).catch(err=>{
        console.log(err)
    })
    

}