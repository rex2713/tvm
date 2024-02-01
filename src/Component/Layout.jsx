import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <HeaderNavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
