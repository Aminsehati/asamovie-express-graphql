const {
    ApolloError
} = require('apollo-server')
const updateCategory = async (_, {
    id,
    input
}, {
    models
}) => {
    try {
        console.log(id);
        return await models.category.findOneAndUpdate({
            _id: id
        }, input)
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = updateCategory