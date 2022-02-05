const {
    ApolloError
} = require('apollo-server')

const auth = require('../../../../middleware/auth')

const updateUser = async (_, {
    input
}, {
    req,
    models
}) => {
    try {
        const user = await auth(req,models);
        const {
            firstName,
            lastName,
            phone,
            password
        } = input ;
        return await models.user.findOneAndUpdate({
            firstName,
            lastName
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = updateUser