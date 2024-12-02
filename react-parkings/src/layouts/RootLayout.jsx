import React from "react";
import { Outlet } from "react-router-dom";
import AuthContextProvider from "../contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <div>
        <p>Header</p>
        <Outlet />
        <footer>Footer</footer>
      </div>
    </AuthContextProvider>
  );
};

export default RootLayout;
