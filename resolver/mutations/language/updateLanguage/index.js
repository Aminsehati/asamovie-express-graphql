const {
    ApolloError
} = require('apollo-server')
const updateLanguage = async (_, {
    id,
    input
}, {
    models
}) => {
    try {
        return await models.language.findOneAndUpdate({
            _id: id
        }, input)
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = updateLanguage