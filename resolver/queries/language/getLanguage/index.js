const {
    ApolloError
} = require('apollo-server')
const getLanguage = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.language.findOne({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getLanguage