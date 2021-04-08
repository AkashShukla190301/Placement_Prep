exports.index=(req,res,next)=>{
    console.log(req.session.isLoggedIn)
    res.render("index",{
        isAuthenticated:req.session.isLoggedIn
    })
}