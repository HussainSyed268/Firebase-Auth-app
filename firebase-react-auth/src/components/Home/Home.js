//Create a simple page saying Home use tailwind to style it
import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <h1>{props.user ? `Welcome ${props.user.displayName}` : ""}</h1>
    </div>
  );
};
export default Home;
