
exports.getnotes=(req,res,next)=>{
    let notes={
        courseimage:["https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        coursename:["BCA","BSC IT","BTECH","BSC CS", "MCA"],
        coursedescription:["Bahelor Of Computer Appliations","Bachelor Of Information Security","Bachelor of Technology","Bachelor of Computer Science", "Master of Computer Application"],
        courselink:[""]

    }
    res.render('notes/notes',{
        courseobj:notes
    })
}