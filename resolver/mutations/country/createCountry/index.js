const {
    ApolloError
} = require('apollo-server')
const createCountry = async (_, {
    input
}, {
    models
}) => {
    try {
        return await models.country.create(input);
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createCountry