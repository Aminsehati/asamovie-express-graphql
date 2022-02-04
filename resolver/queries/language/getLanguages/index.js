const {
    ApolloError
} = require('apollo-server')
const auth = require('../../../../middleware/auth')
const getLanguages = async (_, {
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
            limit : pagination?.limit || 5,
            skip:pagination?.skip || 1
        }
        return await models.language.find().sort(sortItem).limit(paginationItem.limit).skip(paginationItem.skip - 1);
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getLanguages