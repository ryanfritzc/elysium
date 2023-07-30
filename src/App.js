import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {
  Home,
  
} from "./views/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
