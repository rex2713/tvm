import React from "react";
import "../css/cardLightBorder.css";

const CupGame = ({ cardWidth }) => {
  return (
    <button
      className={
        cardWidth +
        "rounded-3xl bg-gradient-to-b from-white/50 to-white/10 p-[1px] duration-1000 hover:bg-white/40"
      }
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-[#384554]/60 p-3 lg:p-4">
        <h3 className=" text-lg font-medium text-white lg:text-xl">
          互動式前端網頁盃
        </h3>
        <div className="flex flex-col items-start gap-2 text-xs tracking-wider text-white/70 lg:text-sm lg:tracking-wide">
          <div className="flex gap-4">
            <p className="shrink-0">比賽時間</p>
            <p className="text-wrap text-start">2023.12.15 ~ 2023.12.18</p>
          </div>
          <div className="flex gap-4">
            <p className="shrink-0">報名時間</p>
            <p className="text-wrap text-start">2023.10.01 ~ 2023.11.30</p>
          </div>
          <div className="flex gap-4">
            <p className="shrink-0">比賽項目</p>
            <p className="text-wrap text-start"> 公開男子組、公開女子組</p>
          </div>
        </div>
        <div className="box">
          <div className="rounded-full border-2 border-white/30 bg-[#0492D9] px-4 py-[2px] text-sm text-white hover:border-transparent hover:bg-[#009EED] xl:px-6 xl:py-1 xl:text-base">
            立即報名
          </div>
        </div>
      </div>
    </button>
  );
};

export default CupGame;
