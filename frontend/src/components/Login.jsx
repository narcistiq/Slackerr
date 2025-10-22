import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client/react";
import { GET_EMAIL } from "./queries"
import "./Login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [getEmail, { data, loading, called }] = useLazyQuery(GET_EMAIL);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        getEmail({ variables: {email} })
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("signup");
    }
    useEffect(() => {   // check when data updates
        if ( called && !loading ){
            if (data?.getEmail) {
            navigate("/applications");
            } else navigate("/signup");
        } 
    }, [data, loading, called, navigate] );

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <div className="btns">
              <button type="submit" className="btn">Login</button>
              <button className="btn signup" onClick={handleSignUp}>Sign Up</button>
            </div>
        </form>
    </>
    );
}
export default Login;