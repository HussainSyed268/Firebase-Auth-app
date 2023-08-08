import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../src/components/Home/Home.js";
import Login from "../src/components/Login/Login.js";
import Signup from "../src/components/Signup/Signup.js";

function App() {
  return (
    <div className="App h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
