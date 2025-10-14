import "./Login.css"
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toApp, setToApp] = useState(false);

  if (toApp) {
    return <Navigate to="/applications"/>;
  }

  return(
    <>
    <div className="login">
      <div className="wrapper">
        <h1>Slackerr</h1>
        <form>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <div className="btns">
              <button type="submit" className="btn" onClick={() => {setToApp(true);}}>Login</button>
              <button className="btn signup">Sign Up</button>
            </div>
        </form>
      </div>
    </div>
    </>
  ); 
}

export default Login;