import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home"
import Document from "./pages/Document"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/graphql",
    headers: {
      'X-CSRF-Token': document.getElementsByName('csrf-token')[0].content
    }
  }),
  cache: new InMemoryCache()
});

const App = ({ children }) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
)

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="docs" element={<Document />} />
      <Route path=":documentId" element={<Document />} />
    </Routes>
  </BrowserRouter>
)

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <App>
      <Router />
    </App>
  )
})
