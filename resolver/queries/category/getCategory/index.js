const {
    ApolloError
} = require('apollo-server')
const getCategory = async (_, {
    id
}, {
    models
}) => {
    try {
        const category = await models.category.findOne({
            _id: id
        });
        return category
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getCategory