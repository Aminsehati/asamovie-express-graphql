const {
    gql
} = require('apollo-server')


module.exports = gql `
    type Query {
        getLanguages(sort : getLanguagesSort , pagination : Pagination) : [Language],
        getLanguage(id : ID!) : Language ,
        getLanguagesCount : Int !
    }
    type Language {
        _id : ID!,
        name:String
    }
    input createLanguageInput {
        name : String!
    }
    input updateLanguageInput {
        name : String!
    }
    type Mutation {
        createLanguage(input : createLanguageInput!): Language,
        updateLanguage(id : ID! , input : updateLanguageInput!): Language ,
        deleteLanguage (id : ID!) : Language
    }
    input  getLanguagesSort {
        name : Int
    }
    input Pagination {
        limit : Int , 
        skip : Int
    }

`