import "./App.css"
import Login from "./components/Login"
import Log from "./components/Log"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/applications" element={<Log />} />
      </Routes>
    </BrowserRouter>
    </>
  ); 
}
export default App;
