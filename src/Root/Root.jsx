import React from "react";
import Sidebar from "../Layouts/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="flex justify-between">
        <nav className="w-3/12">
          <Sidebar></Sidebar>
        </nav>
        <main className="w-3/4">
          <Outlet></Outlet>
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default Root;
