const category = require('./category');
const country = require('./country');
const language = require('./language')
module.exports = {
    ...category,
    ...country,
    ...language
}