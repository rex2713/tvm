import React from "react";
import MemberNav from "../Component/MemberNav";
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
