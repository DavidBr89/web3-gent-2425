import React from "react";

import HoGentLogo from "../assets/images/logo.png";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className=" shadow-lg rounded-lg p-6 md:w-3/4 md:mx-auto my-auto bg-white">
        <img src={HoGentLogo} className="w-60 mx-auto mb-8" />
        <Outlet />
      </div>
      <p className="mt-auto text-center font-thin text-sm">
        &copy; 2024 - HoGent Web 3
      </p>
    </div>
  );
};

export default AuthLayout;
