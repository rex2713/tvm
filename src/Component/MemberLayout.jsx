import React from "react";
import MemberNav from "./MemberNav";
import { Outlet } from "react-router-dom";

const MemberLayout = () => {
  return (
    <div>
      <MemberNav />
      <Outlet />
    </div>
  );
};

export default MemberLayout;
