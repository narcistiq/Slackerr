import "./App.css"
import Login from "./pages/Login"
import Log from "./pages/Log"
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
