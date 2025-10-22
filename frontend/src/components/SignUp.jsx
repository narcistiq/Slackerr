import "./Login.css"

function SignUp() {
    
    return (
        <>
        <form>
            <input className="input signup" type="email" placeholder="Email" required />
            <input className="input signup" type="password" placeholder="Password" required/>
            <input className="input signup" type="password" placeholder="Re-type Password" required/>
            <button className="btn signup-page">Sign Up</button>
        </form>
        </>
    );
}
export default SignUp;