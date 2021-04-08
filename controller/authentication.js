const User=require('../models/users')
const bcrypt=require('bcryptjs')

exports.login=(req,res,next)=>{
    res.render('auth/login',{

    })
}

exports.signup=(req,res,next)=>{
    res.render('auth/signup',{

    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.redirect('/login');
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
              req.session.isLoggedIn = true;
              req.session.user = user;
              return req.session.save(err => {
                console.log(err);
                res.redirect('/');
              });
            }
            res.redirect('/login');
          })
          .catch(err => {
            console.log(err);
            res.redirect('/login');
          });
      })
      .catch(err => console.log(err));
  };

exports.postSignup = (req, res, next) => {
   
    const email = req.body.email;
    const password = req.body.password;
    
    User.findOne({ email: email })
      .then(userDoc => {
        if (userDoc) {
          return res.redirect('/');
        }

      return  bcrypt.hash(password,12)
      .then(hashedPassword=>{
        const user = new User({
            email: email,
            password: hashedPassword,
            
          });
          return user.save();
      })
      .then(result => {
        res.redirect('/');
      });

        
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