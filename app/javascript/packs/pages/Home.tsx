import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_DOCUMENT } from '../gql'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const [createDocument, { data, loading, error }] = useMutation(CREATE_DOCUMENT, {
    onCompleted: ({ createDocument }) => {
      const documentId = createDocument.document.id
      navigate(`/${documentId}`)
    },
  })

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
