import React from "react";
import HeaderNavBar from "../Component/HeaderNavBar";
import Footer from "../Component/Footer";
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
