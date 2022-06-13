import { gql } from '@apollo/client'

export const GET_DOCUMENT = gql`
query Document($id: ID!) {
  document(id: $id) {
    body
  }
}
`

export const CREATE_DOCUMENT = gql`
mutation {
  createDocument(input: {}) {
    document {
      id
      body
    }
    errors
  }
}
`

export const UPDATE_DOCUMENT = gql`
mutation UpdateDocument($id: ID!, $body: GraphQLJSON!) {
  updateDocument(input: { id: $id, body: $body }) {
    document {
      id
      body
    }
    errors
  }
}
`

