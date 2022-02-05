const {
    ApolloError
} = require('apollo-server')
const auth = require('../../../../middleware/auth')
module.exports = async (_, {}, {
    req,
    models
}) => {
    try {
        const user = await auth(req,models);
        return user
    } catch (error) {
        throw new ApolloError(error)
    }
}