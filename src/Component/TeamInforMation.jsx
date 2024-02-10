import React from "react";

const TeamInformation = () => {
  return (
    <div className="flex gap-x-4 rounded-2xl bg-[#2A4A64] p-4">
      {/* 左半部-照片 */}
      <figure className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white">
        <img src="" alt="" />
      </figure>
      {/* 右半部-資訊 */}
      <div className="flex w-full flex-col">
        <div>
          <p className="text-xl">阿呆</p>
        </div>
        <div className="my-[2px] mr-14 border border-[#999999]"></div>
        <div className="flex text-base text-white/70">
          <p>位置：</p>
          <p>主攻、副攻</p>
        </div>
        <div className="flex text-base text-white/70">
          <p>程度：</p>
          <p>體保</p>
        </div>
      </div>
    </div>
  );
};

export default TeamInformation;
