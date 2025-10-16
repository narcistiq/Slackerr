import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});
const client = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>
)