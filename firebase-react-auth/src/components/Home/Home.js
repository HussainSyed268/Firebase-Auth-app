//Create a simple page saying Home use tailwind to style it
import { React, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
const Home = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  return (
    <div className="flex h-full">
      <Sidebar name={props.user} email={props.email} />
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
