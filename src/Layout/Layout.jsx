import React from "react";
import HeaderNavBar from "../Component/HeaderNavBar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  //偵測是否已經登入
  const [isLogIn, setIsLogIn] = useState(!!localStorage.getItem("user"));
  return (
    <div>
      <HeaderNavBar />
      <Outlet context={{ isLogIn: isLogIn, setIsLogIn: setIsLogIn }} />
      <Footer />
    </div>
  );
};

export default Layout;
