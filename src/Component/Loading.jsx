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
    <div className="font-3xl leading-96 h-screen w-screen text-center text-black">
      <div className=" flex h-screen w-screen items-center justify-center bg-black">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Loading;
