const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const movieSchema = new Schema({

},{
    timestamps:true 
})
const movie = mongoose.model("movie",movieSchema);
module.exports = {
    movie
}