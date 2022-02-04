const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const languageSchema = new Schema({
    name: {
        type:String,
        required:true
    }
})
const language = mongoose.model('language', languageSchema);
module.exports = {
    language
}