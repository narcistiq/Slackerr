import "./App.css"
import Homepage from "./pages/Homepage"
import Log from "./pages/Log"
import SignupPage from "./pages/SignupPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:userID/applications" element={<Log />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
    </>
  ); 
}
export default App;
