import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
mutation LoginMutation(
    $name: String!, 
    $email: String!,
    $password: String!
  ) {
    createCustom(data: {name: $name, email: $email, password: $password}) {
      id
    }
  }
`

export const GET_TYPE_CLIENT_QUERY = gql`
    query {
      clientTypes(orderBy: createdAt_DESC, stage: PUBLISHED) {
          id
          type
        }
      }
`