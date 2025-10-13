import "./Login.css"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <>
    <login>
      <div className="wrapper">
        <h1>Slackerr</h1>
        <form>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <div className="btns">
              <button type="submit" className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
        </form>
      </div>
    </login>
    </>
  ); 
}

export default Login;