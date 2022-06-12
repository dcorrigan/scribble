import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { GET_DOCUMENT } from '../gql'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';

const Document = () => {
  const { documentId } = useParams()
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: documentId },
  });

  const initialValue = data?.document.body ?? []

  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue as Descendant[]}>
      <Editable />
    </Slate>
  )
}

export default Document
