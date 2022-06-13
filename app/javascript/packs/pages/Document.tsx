import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { GET_DOCUMENT, UPDATE_DOCUMENT } from '../gql'
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';

const defaultDocument = [{
  type: 'paragraph',
  children: [{ text: '' }]
}]

const Document = () => {
  const { documentId } = useParams()
  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { id: documentId },
  });

  const initialValue = data?.document.body ?? defaultDocument

  const editor = React.useMemo(() => withReact(createEditor()), [])

  const [updateDocument, { data: updateData, error: updateError }] = useMutation(UPDATE_DOCUMENT);
  const onChange = (value) => {
    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    )

    if (isAstChange) {
      updateDocument({ variables: { id: documentId, body: value }})
    }
  }

  return (
    <Slate
      editor={editor}
      value={initialValue as Descendant[]}
      onChange={onChange}
    >
      <Editable />
    </Slate>
  )
}

export default Document
