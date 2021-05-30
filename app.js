const path = require("path")
const express = require("express")
const homeroutes=require("./routes/homepage")
const authRoutes=require("./routes/authentication")
const err=require("./routes/error")
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const bodyParser = require('body-parser');
const flash=require('connect-flash')
const notes=require('./routes/getnotes')
const chat=require('./routes/chat')
var multer  = require('multer')


const app = express()
const port = process.env.PORT || 3000

const User = require('./models/users');

const MONGODB_URI =
  'mongodb+srv://dbUser123:dbUser123@cluster0.ire5o.mongodb.net/myFirstDatabase';

  const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });

  
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'application/pdf'
     
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };



  app.use(bodyParser.urlencoded({ extended: false }));
 

  app.use(
    multer({ dest:'pdfFiles', fileFilter: fileFilter }).single('filename')
  );

app.use(express.static(path.join(__dirname, 'public')));
app.use('/pdfFiles', express.static(path.join(__dirname, 'pdfFiles')));

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

app.use(flash())

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
app.use(notes)
app.use(chat)
app.use(err)






mongoose
  .connect(MONGODB_URI)
  .then(result => {
    app.listen(port);
  })
  .catch(err => {
    console.log(err);
  });
