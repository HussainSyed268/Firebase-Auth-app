//Create a simple page saying Home use tailwind to style it
import { React, useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Sidebar from "./components/Sidebar.jsx";
const Home = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (sidebarOpen) {
      // document.body.classList.add("overflow-hidden");
    } else {
      // document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen]);

  return (
    <div className="flex h-full">
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Sidebar
            name={props.user}
            email={props.email}
            sidebar={sidebarOpen}
          />
          <div>
            <Navbar
              name={props.user}
              setSidebar={setSidebarOpen}
              sidebar={sidebarOpen}
            />
            <Dashboard />
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
