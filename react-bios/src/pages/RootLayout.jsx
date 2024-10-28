import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />

      <div className="max-w-4xl">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
