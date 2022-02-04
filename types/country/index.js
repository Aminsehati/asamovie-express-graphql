const {
    gql
} = require('apollo-server')


module.exports = gql `
 type Query {
    getcountries(sort : getCountrySort , pagination : Pagination) : [Country],
    getCountry(id:ID!):Country,
    getCountriesCount: Int!
 }
 type Country {
     _id : ID ,
     name: String
 }
 input createCountryInput {
     name : String! ,
 }
 input updateCountryInput {
     name : String!
 }
 type Mutation {
     createCountry(input :createCountryInput ) : Country,
     updateCountry(id : ID! , input : updateCountryInput ) : Country ,
     deleteCountry(id:ID!) : Country 
 }
 input getCountrySort {
     name : Int 
 }
 input Pagination {
    limit : Int , 
    skip:Int 
 }
`