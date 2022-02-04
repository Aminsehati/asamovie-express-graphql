const {
    ApolloError
} = require('apollo-server')
const hashService = require('../../../../service/hash-service');
const jwtService = require('../../../../service/jwt-service')
const loginUser = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            phone,
            password
        } = input;
        const user = await models.user.findOne({
            phone
        });
        if (!user) {
            throw new ApolloError("Your phone or Your password are wrong")
        }
        const verifyPassword = await hashService.verifyPassword(password, user.password)
        if (!verifyPassword) {
            throw new ApolloError("Your phone or Your password are wrong")
        }
        let access_token = await jwtService.sign({
            _id: user._id
        });
        return {
            access_token
        }
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = loginUser