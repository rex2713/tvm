import React from "react";
import "../css/cardLightBorder.css";

const CupGame = ({ cardWidth }) => {
  return (
    <button
      className={
        cardWidth +
        "rounded-3xl bg-gradient-to-b from-white/50 to-white/10 p-[1px] hover:bg-white/40 duration-1000"
      }
    >
      <div className="flex  w-full flex-col items-center gap-4 rounded-3xl bg-[#384554]/60 p-4">
        <h3 className=" text-xl font-medium text-white">互動式前端網頁盃</h3>
        <div className="flex flex-col w-full gap-2 text-sm text-white/70 items-center">
          <div className="flex gap-2">
            <p>比賽時間</p>
            <p>2023.12.15 ~ 2023.12.18</p>
          </div>
          <div className="flex gap-2">
            <p>報名時間</p>
            <p>2023.10.01 ~ 2023.11.30</p>
          </div>
          <div className="flex gap-2 text-wrap">
            <p>比賽項目</p>
            <p> 公開男子組、公開女子組、一般男子組</p>
          </div>
        </div>
        <div className="box">
          <div className="rounded-full border-2 border-white/30 bg-[#0492D9] px-6 py-1 hover:border-transparent hover:bg-[#009EED] text-white">
            立即報名
          </div>
        </div>
      </div>
    </button>
  );
};

export default CupGame;
