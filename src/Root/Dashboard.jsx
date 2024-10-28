import React, { useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import { Outlet } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Dashboard = () => {
  const [isOpen, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between">
        <nav className="lg:w-1/5">
          <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}></Sidebar>
        </nav>

        <main className="w-full lg:w-4/5">
          <div className="flex bg-[#001F3F] lg:hidden justify-end">
            <button onClick={toggleMenu} className="p-5 text-white  text-2xl ">
              {isOpen ? <MdOutlineMenu ></MdOutlineMenu> : <RxCross2></RxCross2>}
            </button>
          </div>

          <Outlet></Outlet>
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
