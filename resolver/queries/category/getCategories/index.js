const {
    ApolloError
} = require('apollo-server')
const getCategories = async (_, {
    sort,
    pagination
}, {
    models,
}) => {
    try {
        let sortItem = {
            ...sort
        }
        let paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await models.category.find().sort(sortItem).limit(paginationItem.limit).skip(paginationItem.skip - 1 );
    } catch (error) {
        throw new ApolloError(error)
    }
}


module.exports = getCategories