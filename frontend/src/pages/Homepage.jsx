import "./Homepage.css"
import Login from "../components/Login"

function Homepage() {
  return(
    <>
    <div className="login">
      <div className="wrapper">
        <h1>Slackerr</h1>
        <Login/>
      </div>
    </div>
    </>
  ); 
}

export default Homepage;