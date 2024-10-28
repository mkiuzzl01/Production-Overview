import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Production Overview</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#1E3E62] text-orange-100 min-h-screen p-6">
      <div className="text-center py-5">
        <h1 className="text-2xl font-bold text-yellow-300">Excellent Choice</h1>
      </div>
      <div>
        <ul className="space-y-2">{navLink}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
