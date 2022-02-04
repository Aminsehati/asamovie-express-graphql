const bcrypt = require('bcrypt')
class hashService {
    hashPassword(password) {
        return bcrypt.hash(password, 12)
    }
    verifyPassword(password, hashPassword) {
        return bcrypt.compare(password, hashPassword)
    }
}
module.exports = new hashService()