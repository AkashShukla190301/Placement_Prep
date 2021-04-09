
exports.getnotes=(req,res,next)=>{
    let notes={
        courseimage:["https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/2061168/pexels-photo-2061168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
        coursename:["BCA","BSC IT","BTECH","BSC CS"],
        coursedescription:["Bahelor Of Computer Appliations","Bachelor Of Information Security","Bachelor of Technology","Bachelor of Computer Science"],
        courselink:[""]

    }
    res.render('notes/notes',{
        courseobj:notes
    })
}