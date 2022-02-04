const {
    ApolloError
} = require('apollo-server')
const deleteLanguage = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.language.findOneAndDelete({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = deleteLanguage