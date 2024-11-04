import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import { MdHome, MdFavorite } from "react-icons/md";
import { FaJedi } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-emerald-700 p-4 flex justify-between items-center">
      <img className="w-24" src={logo} />

      <div className="flex items-center gap-8 mr-4 text-2xl">
        {/* Link components dienen in principe om ergens in de content te plaatsen */}
        {/* <Link to="/">Home</Link>
        <Link to="/favorites">Favorieten</Link> */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white underline underline-offset-4"
                : "text-emerald-500"
            }`
          }>
          <MdHome />
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white underline underline-offset-4"
                : "text-emerald-500"
            }`
          }>
          <MdFavorite />
        </NavLink>
        <NavLink
          to="/starwars"
          className={({ isActive }) =>
            `${
              isActive
                ? "text-white underline underline-offset-4"
                : "text-emerald-500"
            }`
          }>
          <FaJedi />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
