const {
    ApolloError
} = require('apollo-server')
const hashService = require('../../../../service/hash-service');
const jwtService = require('../../../../service/jwt-service');
const registerUser = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            phone,
            password
        } = input
        const hasUser = await models.user.findOne({
            phone
        })
        if (hasUser) {
            throw new ApolloError("This number is already registered")
        }
        const hashPassword = await hashService.hashPassword(password);
        const newUser = await models.user.create({
            password: hashPassword,
            phone
        })
        const access_token = await jwtService.sign({
            _id: newUser._id
        });
        return {
            access_token
        }
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = registerUser