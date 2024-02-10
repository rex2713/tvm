import React from "react";
import MemberNav from "../Component/MemberNav";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const MemberLayout = () => {
  const data = useOutletContext();
  const isLogIn = data.isLogIn;
  const setIsLogIn = data.setIsLogIn;
  return (
    <div>
      <MemberNav isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      <Outlet context={{ isLogIn: isLogIn, setIsLogIn: setIsLogIn }} />
    </div>
  );
};

export default MemberLayout;
