import React from "react";
import MemberNav from "../Component/MemberNav";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

const MemberLayout = () => {
  const outlet = useOutletContext();
  const { isLogIn, setIsLogIn, memberIconSrc, setMemberIconSrc } = outlet;
  return (
    <div>
      <MemberNav isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      <Outlet
        context={{
          isLogIn: isLogIn,
          setIsLogIn: setIsLogIn,
          memberIconSrc: memberIconSrc,
          setMemberIconSrc: setMemberIconSrc,
        }}
      />
    </div>
  );
};

export default MemberLayout;
