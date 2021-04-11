const User=require('../models/users')
const bcrypt=require('bcryptjs')

exports.login=(req,res,next)=>{
    let message=req.flash('error');
    if(message.length>0){
        message=message[0];
    }else{
        message=null;
    }


    res.render('auth/login',{

        errorMessage:message
    })
}

exports.signup=(req,res,next)=>{
    let message=req.flash('error');
    if(message.length>0){
        message=message[0];
    }else{
        message=null;
    }

    res.render('auth/signup',{
        errorMessage:message

    })
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    req.session.email=email
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
            req.flash('error','Invalid email or password')
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
            req.flash('error','Email already exist!')
          return res.redirect('/signup');
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