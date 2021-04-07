exports.error=(req,res,next)=>{
    res.render("404",{
        message: "Page Not found"
    })
}

