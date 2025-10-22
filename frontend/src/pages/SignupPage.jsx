import SignUp from  "../components/SignUp"
import "./Homepage.jsx"

function SignupPage() {
    return (
        <>
        <div className="login">
            <div className="wrapper">
                <h1>Slackerr</h1>
                <SignUp/>
            </div>
        </div>
        </>
    );
}
export default SignupPage;