import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import {
  Home,
} from "./views/Home";
function App() {
  return (
    <div className="App">
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
