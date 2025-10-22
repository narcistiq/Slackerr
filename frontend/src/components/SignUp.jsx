import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { ADD_USER } from "./mutations";
import "./Login.css";

function SignUp() {
    const [createUser, { data }] = useMutation(ADD_USER);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data?.getEmail) {
            console.log("email already exists!");
            return;
        } else {
            console.log("email available!")
            createUser({
                variables: {
                    email,
                    password,
                }
            })
            navigate("/")
            return;
        }
    }
    // note: set password matching checks
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="input signup" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input className="input signup" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            <input className="input signup" type="password" placeholder="Re-type Password" required/>
            <button type="submit" className="btn signup-page" >Sign Up</button>
        </form>
        </>
    );
}
export default SignUp;