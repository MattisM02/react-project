import React, { useState } from "react";
import "./styles/Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="toggleButtonDiv">
        <button className="toggle-button" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      <ul className="menu">
        <li>
          <div className="sidebarListItem">
            <span className="material-symbols-outlined">home</span>
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className="sidebarListItem">
            <span className="material-symbols-outlined">deployed_code</span>
            <p>Deployed Code</p>
          </div>
        </li>
        <li>
          <div className="sidebarListItem">
            <span className="material-symbols-outlined">clock_loader_60</span>
            <p>Clock Loader</p>
          </div>
        </li>
        <li>
          <div className="sidebarListItem">
            <span className="material-symbols-outlined">favorite</span>
            <p>Favorites</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
