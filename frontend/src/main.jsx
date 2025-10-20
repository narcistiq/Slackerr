import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import styles from "./theme/styles.js"

const theme = extendTheme({
  styles: styles,
})

const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql",
});
const client = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={ client }>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </ApolloProvider>
)