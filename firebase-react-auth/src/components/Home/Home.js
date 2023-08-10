//Create a simple page saying Home use tailwind to style it
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
const Home = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <h1 className="text-black">
        {props.user ? `Welcome ${props.user}` : "Welcome"}
      </h1>
    </div>
  );
};
export default Home;
