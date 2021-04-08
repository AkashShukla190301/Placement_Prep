exports.index=(req,res,next)=>{
    res.render("index",{
        isAuthenticated:req.session.isLoggedIn
    })
}