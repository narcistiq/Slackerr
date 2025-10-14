import "./App.css"
import Login from "./components/Login"
import Log from "./components/Log"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   ApolloLink,
// } from '@apollo/client';
// import { ErrorLink } from '@apollo/client/link/error'

// const link = ApolloLink.from([
//   ErrorLink,
//   new HttpLink({ uri: 'http://localhost:3000/graphql' }),
// ]);
// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: link
// })

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/applications" element={<Log />} />
      </Routes>
    </BrowserRouter>
    </>
  ); 
}
export default App;
