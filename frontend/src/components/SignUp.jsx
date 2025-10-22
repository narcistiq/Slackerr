import "./Login.css"

function SignUp() {
    return (
        <>
        <form>
            <input className="input" type="email" placeholder="Email" required />
            <input className="input" type="password" required/>
              <button type="submit" className="btn">Login</button>
              <button className="btn signup">Sign Up</button>
        </form>
        </>
    );
}
export default SignUp;