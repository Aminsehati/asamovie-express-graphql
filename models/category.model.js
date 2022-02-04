const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categoryShema = new Schema({
    name: {
        type: String,
        required:true,
    }
})


const category = mongoose.model('category', categoryShema);
module.exports = {
    category
}