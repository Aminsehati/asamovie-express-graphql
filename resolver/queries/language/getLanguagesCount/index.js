const {
    ApolloError
} = require('apollo-server')
const getLanguagesCount = async (_, {}, {
    models
}) => {
    try {
        return await models.language.find().count();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getLanguagesCount