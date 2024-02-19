import React from "react";
import HeaderNavBar from "../Component/HeaderNavBar";
import Footer from "../Component/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  //偵測是否已經登入
  const [isLogIn, setIsLogIn] = useState(!!localStorage.getItem("user"));
  const [memberIconSrc, setMemberIconSrc] = useState();
  return (
    <div>
      <HeaderNavBar
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
        memberIconSrc={memberIconSrc}
        setMemberIconSrc={setMemberIconSrc}
      />
      <Outlet
        context={{
          isLogIn: isLogIn,
          setIsLogIn: setIsLogIn,
          memberIconSrc: memberIconSrc,
          setMemberIconSrc: setMemberIconSrc,
        }}
      />
      <Footer />
    </div>
  );
};

export default Layout;
