const express = require("express")
const app = express()
const router = express.Router()
const Animal = require("../models/animalCollection.js")
const auth = require("../authMiddleware.js")

router.get("/animals", function(req, res, next) {
    const dirtySearch = req._parsedUrl.search
    console.log(dirtySearch)
    const cleanSearch = dirtySearch.slice(2, dirtySearch.length)
    console.log(cleanSearch)

    Animal.find({
                name: cleanSearch
            })
        .then(function(data) {
            res.send(data)
        })
})


router.post("/animals", function(req, res, next) {
    Animal.create(req.body)
        .then(function(data) {
            res.send(data)
        })
        .catch(next)
})


router.put("/animals:id", function(req, res, next) {
    Animal.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(function() {
            Animal.findOne({_id: req.params.id})
                .then(function(data) {
                    res.send(data)
                })
        })
})


router.delete("/animals:id", function(req, res, next) {
    Animal.findByIdAndRemove({_id: req.params.id})
        .then(function(data) {
            res.send(data)
        })
})


module.exports = router