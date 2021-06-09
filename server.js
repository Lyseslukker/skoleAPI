const express = require("express")
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())

// app.use("http://localhost:4500/image", express.static(filepath to animalAPI folder + the rest of the path to the image folder))
app.use("/image", express.static(__dirname + "/public/image"))

const routes = require("./routes/api.js")

// Connecting to mongoDB
mongoose.connect("mongodb://localhost:27017/animals", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
})
// 'mongoose.Promise' is deprecated, so we need to set it to 'global.Promise' instead
mongoose.Promise = global.Promise

// app.use(routes) initialize routes
// "/api" adds '/api' to the url before the routes ei /ninjas etc
// FROM: localhost:4000/ninjas
// TO: localhost:4000/api/ninjas
app.use("/api", routes)

// Errorhandling middleware 
app.use(function(err, req, res, next) {
    // console.log(err)

    // Sends the status code 422 with the error message
    // Piping is used to make this happen
    res.status(422).send({
        error: err.message
    })
})



app.listen(4500, function() {
    console.log(`Accepting requests on port: 4500`)
})