const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

const country = mongoose.model("country", countrySchema);

module.exports = {
    country
}