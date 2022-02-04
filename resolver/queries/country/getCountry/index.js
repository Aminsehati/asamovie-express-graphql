const {
    ApolloError
} = require('apollo-server')
const getCountry = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.country.findOne({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getCountry