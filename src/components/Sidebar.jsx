import React from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const sidebarPaths = ["/", "/about", "/more-info"];
  const shouldRenderSidebar = sidebarPaths.includes(location.pathname);
  return shouldRenderSidebar ? (
    <aside className="sidebar">
      {" "}
      <div className="sidebar-inner">
        {" "}
        <ul>
          {" "}
          <li>
            <a href="/more-info">More Info</a>
          </li>{" "}
          <li>
            <a href="/about">About</a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </aside>
  ) : null;
};

export default Sidebar;
