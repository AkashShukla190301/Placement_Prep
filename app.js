const path = require("path")
const express = require("express")
const homeroutes=require("./routes/homepage")
const authRoutes=require("./routes/authentication")
const err=require("./routes/error")

const app = express()
const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')));
const viewsPath = path.join(__dirname, "views")

app.set('view engine', 'ejs');
app.set('views', viewsPath)



app.use(homeroutes);
app.use(authRoutes);
app.use(err)






app.listen(port, ()=>{
    console.log("Server is up on port "+ port)
})