const {
    ApolloError
} = require('apollo-server')

const deleteCountry = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.country.findOneAndDelete({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = deleteCountry