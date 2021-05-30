exports.index=(req,res,next)=>{
    res.render("index",{
        isAuthenticated:req.session.isLoggedIn
    })
}

exports.getallproducts=(req,res,next)=>{
    res.render("allcourses",{
        isAuthenticated:req.session.isLoggedIn
    })
}

