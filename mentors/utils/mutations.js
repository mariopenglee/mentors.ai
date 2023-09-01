import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      icon_ID
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      _id
      name
      email
      icon_ID
    }
  }
`;  