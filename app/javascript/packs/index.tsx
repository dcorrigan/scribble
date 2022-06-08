import React from 'react'
import ReactDOM from 'react-dom/client'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor, Descendant } from 'slate'

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const App = () => {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue as Descendant[]}>
      <Editable />
    </Slate>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)
})
