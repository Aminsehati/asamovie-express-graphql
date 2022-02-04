const {
    gql
} = require('apollo-server')

module.exports = gql `
 type Mutation {
     registerUser(input :registerUserInput! ) : Token , 
     loginUser (input :loginUserInput! ):Token
 }
 type User {
     firstName:String ,
     lastName:String,
     phone:String,
     password:String,
     token:String
 }
 input registerUserInput {
     phone:String!,
     password:String!,
 }
 input loginUserInput {
    phone:String!,
     password:String!,
 }
 type Token {
    access_token:String!
 }
`