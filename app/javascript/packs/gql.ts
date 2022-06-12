import { gql } from '@apollo/client'

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

export const GET_DOCUMENT = gql`
query Document($id: ID!) {
  document(id: $id) {
    body
  }
}
`
