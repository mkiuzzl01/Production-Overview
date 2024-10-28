import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ route, routeName, icon }) => {
  return (
    <li>
      <NavLink to={route}>
        <div className="flex items-center gap-2">
          {icon}
          {routeName}
        </div>
      </NavLink>
    </li>
  );
};

export default Menu;
