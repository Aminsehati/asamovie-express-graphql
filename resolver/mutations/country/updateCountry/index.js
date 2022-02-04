const {
    ApolloError
} = require('apollo-server')
const updateCountry = async (_, {
    id,
    input
}, {
    models
}) => {
    try {
        return await models.country.findOneAndUpdate({
            _id: id,
        }, input)
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = updateCountry