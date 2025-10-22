import { useNavigate } from "react-router-dom";
import "./Login.css";

function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/")
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input className="input signup" type="email" placeholder="Email" required />
            <input className="input signup" type="password" placeholder="Password" required/>
            <input className="input signup" type="password" placeholder="Re-type Password" required/>
            <button type="submit" className="btn signup-page" >Sign Up</button>
        </form>
        </>
    );
}
export default SignUp;