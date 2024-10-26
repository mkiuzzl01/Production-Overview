import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLink = (
    <>
      <li>
        <NavLink>Production Overview</NavLink>
      </li>
      <li>
        {" "}
        <NavLink>Products Status</NavLink>
      </li>
      <li>
        <NavLink>Order List</NavLink>
      </li>
      <li>
        <NavLink>Activity Log</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-slate-500 min-h-screen">
      <div></div>
      <div>
        <ul className="space-y-2">{navLink}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
