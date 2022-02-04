const {
    ApolloError
} = require('apollo-server')
const getcountries = async (_, {
    sort,
    pagination
}, {
    models
}) => {
    try {
        let sortItem = {
            ...sort
        }
        let paginationItem = {
            limit: pagination ?.limit || 5,
            skip: pagination ?.skip || 1
        }
        return await models.country.find().sort(sortItem).limit(paginationItem.limit).skip(paginationItem.skip);
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getcountries