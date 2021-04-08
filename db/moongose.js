const mongoose = require("mongoose")

const connectionURL = "mongodb+srv://dbUser123:dbUser123@cluster0.ire5o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(connectionURL, {useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})