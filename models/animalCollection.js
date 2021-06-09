const mongoose = require("mongoose")
const Schema = mongoose.Schema


const AnimalSchema = new Schema({
    name: {
        type: String
    },
    food: {
        type: [String]
    },
    groupBehavior: {
        type: String
    },
    threat: {
        type: [String]
    },
    population: {
        type: [Schema.Types.Mixed]
    },
    habitat: {
        type: [Schema.Types.Mixed]
    },
    diet: {
        type: String
    },
    lifestyle: {
        type: String
    },
    color: {
        type: [String]
    },
    skin: {
        type: String
    },
    life: {
        type: [Number]
    },
    weight: {
        type: [Schema.Types.Mixed]
    },
    height: {
        type: [Schema.Types.Mixed]
    },
    funFact: {
        type: String
    },
    img: {
        type: String
    }
})

const Animal = mongoose.model("animal", AnimalSchema)

module.exports = Animal