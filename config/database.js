const mongoose = require('mongoose');
const db = mongoose.connection;
module.exports = () => {
    mongoose.connect(
        'mongodb+srv://root:Wu0QOxBQbwhbLReQ@graphql-express.h3zny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}