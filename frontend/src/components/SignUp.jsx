import { useNavigate } from "react-router-dom";
import { useMutation, useLazyQuery } from "@apollo/client/react";
import { useState, useEffect } from "react";
import { ADD_USER } from "./mutations";
import { GET_EMAIL } from "./queries";
import { Link } from "react-router";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./Login.css";

function SignUp() {
    const [createUser] = useMutation(ADD_USER);
    const [getEmail] = useLazyQuery(GET_EMAIL)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [reTypePassword, setReTypePassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await getEmail({ variables: {email} });
        if (data?.getEmail) {
            setErrMessage("Email already taken!")
            return;
        }
        else if (password != reTypePassword) {
            setErrMessage("Password doesn't match!");
        }
        else {
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
    useEffect(() => {
        setErrMessage("");
    }, [email, password, reTypePassword])
    // note: set password matching checks
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="input signup" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input className="input signup" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            <input className="input signup" type="password" placeholder="Re-type Password" onChange={(e) => setReTypePassword(e.target.value)} required/>
            {
                errMessage && <div className="error">
                    <IoMdInformationCircleOutline/>
                    {errMessage}
                </div>
            }
            <button type="submit" className="btn signup-page" >Sign Up</button>
            <Link to="/" className="to-login">Already signed up? Click here to log in!</Link>
        </form>
        </>
    );
}
export default SignUp;