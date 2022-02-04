const {
    ApolloError
} = require('apollo-server')
const getCategoryCount = async (_, {}, {
    models
}) => {
    try {
        return models.category.find().count()
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getCategoryCount