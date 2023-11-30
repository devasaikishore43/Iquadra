import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login"
import Home from "./Home"
import Signup from "./Signup"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
