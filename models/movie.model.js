const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const movieSchema = new Schema({
    hd:{
        type:Boolean,
        default:false,
    },
    imdb:{
        type:String,
        default:""
    },
    story:{
        type:String,
        required:true,
    }
},{
    timestamps:true 
})
const movie = mongoose.model("movie",movieSchema);
module.exports = {
    movie
}