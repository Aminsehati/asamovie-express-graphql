const {
    ApolloError
} = require('apollo-server')
const deleteCategory = async (_, {
    id
}, {
    models
}) => {
    try {
        console.log("id", id);
        const category = await models.category.findOneAndDelete({
            _id: id
        });
        return category
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = deleteCategory