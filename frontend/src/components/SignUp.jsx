import { useNavigate } from "react-router-dom";
import { useMutation, useLazyQuery } from "@apollo/client/react";
import { useState } from "react";
import { ADD_USER } from "./mutations";
import { GET_EMAIL } from "./queries";
import "./Login.css";

function SignUp() {
    const [createUser] = useMutation(ADD_USER);
    const [getEmail] = useLazyQuery(GET_EMAIL)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reTypePassword, setReTypePassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getEmail({ variables: {email} });
        if (data?.getEmail) {
            console.log(data)
            console.log("email exists already!");
            return;
        }
        else {
            console.log(data)
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
            <input className="input signup" type="password" placeholder="Re-type Password" onChange={(e) => setReTypePassword(e.target.value)} required/>
            <button type="submit" className="btn signup-page" >Sign Up</button>
        </form>
        </>
    );
}
export default SignUp;