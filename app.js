const path = require("path")
const express = require("express")
const homeroutes=require("./routes/homepage")
const authRoutes=require("./routes/authentication")
const err=require("./routes/error")
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express()
const port = process.env.PORT || 3000

const User = require('./models/users');

const MONGODB_URI =
  '';

  const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });


app.use(express.static(path.join(__dirname, 'public')));
const viewsPath = path.join(__dirname, "views")

app.set('view engine', 'ejs');
app.set('views', viewsPath)

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );
  

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(homeroutes);
app.use(authRoutes);
app.use(err)






app.listen(port, ()=>{
    console.log("Server is up on port "+ port)
})