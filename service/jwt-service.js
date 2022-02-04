const jwt = require('jsonwebtoken')
class jwtService {
    sign(payload , expierd = "2d" , secret = process.env.SECRET_JWT){
        return jwt.sign(payload , secret , {
            expiresIn:expierd
        })
    }
}
module.exports = new jwtService();