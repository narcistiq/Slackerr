import "./App.css"
import { useState } from "react";
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
  const [input, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <>
    <div className='title'>
      <h2>Slackerr</h2>
    </div>
    <div className='login'>
      <form>
        <input type="email" value={input} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Login</button>
        <button>Sign Up</button>
      </form>
    </div>
    </>
  ); 
}
export default App;
