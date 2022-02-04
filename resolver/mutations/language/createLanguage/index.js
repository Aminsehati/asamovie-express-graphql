const {
    ApolloError
} = require('apollo-server')


const createLanguage = async (_, {
    input
}, {
    models
}) => {
    try {
        return await models.language.create(input)
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createLanguage