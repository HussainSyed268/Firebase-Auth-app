//Create a simple page saying Home use tailwind to style it
import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (
      props.user === "" ||
      props.user === undefined ||
      props.user === null ||
      !props.user
    ) {
      // If user is not authenticated, navigate to the login page
      navigate("/login");
    }

    if (sidebarOpen) {
      // document.body.classList.add("overflow-hidden");
    } else {
      // document.body.classList.remove("overflow-hidden");
    }
  }, [props.user, sidebarOpen, navigate]);

  return (
    <div className="flex h-full">
      <Sidebar name={props.user} email={props.email} sidebar={sidebarOpen} />
      <div>
        <Navbar
          name={props.user}
          setSidebar={setSidebarOpen}
          sidebar={sidebarOpen}
        />
        <Dashboard />
      </div>
    </div>
  );
};
export default Home;
