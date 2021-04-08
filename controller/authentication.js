const User=require('../models/users')

exports.login=(req,res,next)=>{
    res.render('auth/login',{

    })
}

exports.signup=(req,res,next)=>{
    res.render('auth/signup',{

    })
}

exports.postLogin=(req,res,next)=>{

}

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
      .then(userDoc => {
        if (userDoc) {
          return res.redirect('/');
        }
        const user = new User({
          email: email,
          password: password,
          
        });
        return user.save();
      })

      .then(result => {
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
  };
  


exports.postLogout=(req,res,next)=>{
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}