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

const Document = () => {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} value={initialValue as Descendant[]}>
      <Editable />
    </Slate>
  )
}

const Home = () => {
  return (
    <>
      <h1>Hello. Create a doc.</h1>
      <Link to="docs">
        New doc
      </Link>
    </>
  )
}

// ROUTER code, move later
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="docs" element={<Document />} />
      <Route path=":documentId" element={<Document />} />
    </Routes>
  </BrowserRouter>
)
// END ROUTER

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<Router />)
})
