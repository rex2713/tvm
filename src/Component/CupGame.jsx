import React from "react";
import "../css/cardLightBorder.css";

const CupGame = ({ cardWidth }) => {
  return (
    <div
      className={
        cardWidth +
        "rounded-[32px] bg-gradient-to-b from-[#FFF]/60 to-[#FFF]/20 p-[1px] hover:bg-[#FFF]/50"
      }
    >
      <div className="flex  w-full flex-col items-center gap-y-4 rounded-[32px] bg-[#384554]/60 p-4 text-base text-white">
        <h3 className=" text-xl font-medium ">互動式前端網頁杯</h3>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex">
            <p>比賽時間：</p>
            <p>2023.12.15</p>~<p>2023.12.18</p>
          </div>
          <div className="flex">
            <p>報名時間：</p>
            <p>2023.10.01</p>~<p>2023.11.30</p>
          </div>
          <hr></hr>
          <div className="flex">
            <p>比賽項目：</p>
            <p> 公開男子組</p>、<p>公開女子組</p>
          </div>
        </div>
        <div className="box">
          <button className="rounded-3xl border-[1px] border-[#FFF]/30 bg-[#0492D9] px-6 py-2 hover:border-transparent hover:bg-[#009EED]">
            立即報名
          </button>
        </div>
      </div>
    </div>
  );
};

export default CupGame;
