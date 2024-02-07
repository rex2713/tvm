import React from "react";
import Lottie from "react-lottie";
import animationData from "../js/lottie/loader.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: { width: "100vw", height: "100vh" },
  };
  return (
    <div className="font-3xl leading-96 h-full w-full  text-center text-black">
      <div className="">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Loading;
