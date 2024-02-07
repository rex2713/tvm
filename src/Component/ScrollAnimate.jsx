import React from "react";
import Lottie from "react-lottie";
import animationScroll from "../js/lottie/scrollAnimate.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationScroll,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: { width: "200px", height: "300px" },
  };
  return (
    <div className="">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Loading;
