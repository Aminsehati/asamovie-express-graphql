const {
    AuthenticationError,
    ApolloError
} = require('apollo-server')
const jwtService = require('../service/jwt-service')
module.exports = async (req, models) => {
    try {
        const authHeaders = req.headers.token;
        if (!authHeaders) {
            throw new ApolloError("invalid/expired token")
        }
        const token = authHeaders.split(" ")[1];
        const {
            _id
        } = await jwtService.verify(token)
        const user = await models.user.findOne({
            _id
        });
        return user
    } catch (error) {
        throw new ApolloError(error)
    }
}