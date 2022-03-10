const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Event {
    _id: ID
    name: String
    description: String
    price: Int
    date: String
  }

  type Membership {
    _id: ID
    name: String
    createdAt: String
    status: String
    dues: Int
    title: String
    email: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Query {
    events: [Event]
    memberships: [Membership]
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    updateUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;


module.exports = typeDefs;
