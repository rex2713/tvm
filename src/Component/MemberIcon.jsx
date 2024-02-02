import React, { useEffect } from "react";
// import Spline from "@splinetool/react-spline";
import VanillaTilt from "vanilla-tilt";

const MemberIcon = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".your-element"), {
      max: 25,
      speed: 400,
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".your-element"));
  }, []);

  return (
    <div className="your-element flex h-16 w-16 items-center justify-center">
      <figure className="relative flex items-center justify-center">
        <img
          src="../../pic/icon/member/no login.png"
          alt=""
          className="absolute h-10 w-10"
        />
        <img
          src="../../pic/icon/member/member_icon_bg.png"
          alt=""
          className="h-full w-full "
        />
      </figure>
    </div>
    // <div
    //   className="your-element"
    //   style={{ width: "200px", height: "200px", backgroundColor: "green" }}
    // >
    //   234
    // </div>

    // <Spline scene="https://prod.spline.design/47TA2LUrvdohFog3/scene.splinecode" />
  );
};

export default MemberIcon;
