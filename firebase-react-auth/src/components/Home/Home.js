//Create a simple page saying Home use tailwind to style it
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
const Home = (props) => {
  return (
    <div className="h-full">
      <Navbar name={props.user} />
      <Dashboard />
    </div>
  );
};
export default Home;
