import React from "react";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import AuthService from "../../services/auth-service";

const MemberIcon = ({ memberIconSrc, setMemberIconSrc }) => {
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".vanilla-tilt"), {
      max: 15,
      speed: 200,
      perspective: 500,
      reverse: true,
      scale: 1.3,
    });

    VanillaTilt.init(document.querySelectorAll(".vanilla-tilt"));
  }, []);

  return (
    <div
      className="vanilla-tilt relative flex h-16 w-16 items-center justify-center [transform-style:preserve-3d]"
      data-tilt
    >
      <figure className="flex items-center justify-center [transform-style:preserve-3d]">
        {user && user.user.photoSelected ? (
          <img
            src={user.user.photoSelected}
            alt=""
            className="absolute h-10 w-10 [transform:translateZ(5px)]"
          />
        ) : (
          <img
            src="../../pic/icon/member/no login.png"
            alt=""
            className="absolute h-10 w-10 [transform:translateZ(5px)]"
          />
        )}
        <img
          src="../../pic/icon/member/member_icon_bg.png"
          alt=""
          className="h-full w-full"
        />
      </figure>
    </div>
  );
};

export default MemberIcon;
