const {
    ApolloError
} = require('apollo-server')
const createCategory = async (_, {
    input
}, {
    models
}) => {
    try {
        return await models.category.create(input);
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = createCategory