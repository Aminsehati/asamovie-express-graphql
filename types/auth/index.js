const {
    gql
} = require('apollo-server')

module.exports = gql `
 type Mutation {
     registerUser(input :registerUserInput! ) : Token , 
     loginUser (input :loginUserInput! ):Token,
     updateUser(input : updaateUserInput! ):User
 }
 type Query {
    getUserInfo : User
 }
 input registerUserInput {
     phone:String!,
     password:String!,
 }
 input loginUserInput {
    phone:String!,
     password:String!,
 }
 input updaateUserInput {
     firstName : String!,
     lastName : String ! ,
     phone : String  ,
     password : String  ,
 }
 type Token {
    access_token:String!
 }
 type User {
     firstName : String ,
     lastName: String ,
     phone : String ,
     password:String
 }
`