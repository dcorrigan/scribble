import React from 'react'
import { Link } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const CREATE_DOCUMENT = gql`
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

const Home = () => {
  const [createDocument, { data, loading, error }] = useMutation(CREATE_DOCUMENT)

  const onClick = e => {
    e.preventDefault()
    createDocument()
  }

  return (
    <>
      <h1>Hello. Create a doc.</h1>
      <button onClick={onClick}>New Doc</button>
    </>
  )
}

export default Home
