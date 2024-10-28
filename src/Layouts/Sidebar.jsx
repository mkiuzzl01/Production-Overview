import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleMenu }) => {
  console.log(isOpen);

  const navLink = (
    <>
      <li>
        <NavLink to="/">Production Overview</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`z-10 absolute lg:relative transform ${
        isOpen && "-translate-x-full"
      } lg:translate-x-0 transition duration-200 ease-in-out`}
    >
      <div className="bg-[#1E3E62] text-orange-100 bg-opacity-90 lg:bg-opacity-100 h-screen p-5">
        <h1 className="text-2xl font-bold text-yellow-300 py-5">Excellent Garments </h1>
        <div>
          <ul onClick={toggleMenu} className="space-y-2">
            {navLink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
