const {
    ApolloError
} = require('apollo-server')
const getCountriesCount = async (_, {}, {
    models
}) => {
    try {
        return await models.country.find().count()
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getCountriesCount