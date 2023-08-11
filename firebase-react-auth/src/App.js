import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import Home from "../src/components/Home/Home.js";
import Login from "../src/components/Login/Login.js";
import Signup from "../src/components/Signup/Signup.js";

function App() {
  const [username, setUsername] = useState("");
  const [usemail, setEmail] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        setEmail(user.email);
        console.log(user.displayName + " is logged in");
      } else {
        setUsername("");
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <div className="App h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home user={username} email={usemail} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
