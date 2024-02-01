import React from "react";
import { Outlet } from "react-router-dom";
import TeamNav from "./TeamNav";

const TeamLayout = () => {
  return (
    <div>
      <TeamNav />
      <Outlet />
    </div>
  );
};

export default TeamLayout;
