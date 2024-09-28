import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
      user {
        id
        name
        phone
        birthDate
        email
        role
      }
    }
  }
`;

export interface LoginInput {
  email: String;
  password: String;
}
