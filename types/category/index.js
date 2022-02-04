const {
    gql
} = require('apollo-server');


module.exports = gql `
    type Category {
        _id : String , 
        name:String ,
    }
    type Query {
        getCategories( sort :getCategorySort , pagination : Pagination  ) : [Category],
        getCategory(id : ID!) : Category,
        getCategoryCount: Int
    } 
    input createCategoryInput {
        name : String !
    }
    input updateCategoryInput {
        name : String !
    }
    type Mutation {
        createCategory(input : createCategoryInput) : Category ,
        updateCategory(id : ID! , input : updateCategoryInput ) : Category ,
        deleteCategory(id : ID!) : Category
    }
    input getCategorySort {
        name : Int 
    }
    input Pagination  {
        limit:Int ,
        skip:Int
    }
`