import React from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const Document = () => {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue as Descendant[]}>
      <Editable />
    </Slate>
  )
}

export default Document
