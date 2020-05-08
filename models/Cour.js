const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    id_author : {
        type : String,
        required : true
    }
})

module.exports = Cour = mongoose.model('cour',CourSchema)