import React from "react";
import { Outlet } from "react-router-dom";
import TeamNav from "../Component/TeamNav";

const TeamLayout = () => {
  return (
    <div>
      <TeamNav />
      <Outlet />
    </div>
  );
};

export default TeamLayout;
