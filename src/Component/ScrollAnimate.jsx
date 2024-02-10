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
    style: { width: "100%", height: "100%" },
  };
  return (
    <div className="">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Loading;
