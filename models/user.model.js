const mongoose = require('mongoose')
const Shema = mongoose.Schema ;
const userSchema = new Shema({
    firstName:{
        type:String,
        default:"",
        trim:true,
    },
    lastName:{
        type:String,
        default:'',
        trim:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    }
})
const user = mongoose.model('user',userSchema);
module.exports = {
    user
}