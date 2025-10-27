import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyQuery } from "@apollo/client/react";
import { GET_EMAIL } from "./queries"
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./Login.css"
import "./SignUp.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notUser, setNotUser] = useState('');
    const [notPassword, setNotPassword] = useState('');
    const navigate = useNavigate();

    const [getEmail, { data, loading, called }] = useLazyQuery(GET_EMAIL, {
        fetchPolicy: "network-only",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        getEmail({ variables: {email} })
    }
    // user presses signup button
    const handleSignUp = (e) => {
        e.preventDefault();
        navigate("signup");
    }
    // check ONLY when data updates
    useEffect(() => {   
        if ( called && !loading ){
            if (data?.getEmail) {
                const userId = data.getEmail.id;
                const userPassword = data.getEmail.password;
                if (userPassword != password) {
                    setNotPassword("Password incorrect!")
                } else navigate(`/${userId}/applications`);
            } else setNotUser("User doesn't exist! Please create an account using the Sign Up button.");
        } 
    }, [data, loading, called, navigate] );

    // reset error messages when user starts typing
    useEffect(() => {
        setNotPassword("")
        setNotUser("")
    }, [email, password])

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            { notUser && <div className="error">
                <IoMdInformationCircleOutline size={15}/>
                {notUser}
                </div> }
            <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            { notPassword && <div className="error">
                <IoMdInformationCircleOutline size={15}/>
                {notPassword}
                </div> }
            <div className="btns">
              <button type="submit" className="btn">Login</button>
              <button className="btn signup" onClick={handleSignUp}>Sign Up</button>
            </div>
        </form>
    </>
    );
}
export default Login;