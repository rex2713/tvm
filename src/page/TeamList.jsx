import React from "react";
import TeamCard from "../Component/TeamCard";
import TeamSearchBar from "../Component/TeamSearchBar";
import "../css/main.css";

const TeamList = () => {
  window.scrollTo(0, 0);
  return (
    <main className="flex w-full flex-col justify-center gap-10 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      <section className="w-full gap-6 rounded-3xl border-2 border-[#FFE8A3]/50 px-6 py-2">
        <h4 className="text-center text-xl font-medium text-[#FFCC66]">
          系統公告
        </h4>
        <div className="w-full overflow-hidden">
          <ul className="marquee-content flex list-disc gap-28 tracking-wider text-white/60">
            <li>本網站旨在提供球友們便利的揪團平台，請大家友善交流。</li>
            <li>因應寒暑假及國定假日，球場開放時間可能會有異動。</li>
          </ul>
        </div>
      </section>

      {/* 搜尋區 */}
      {/* <form className="flex justify-center gap-x-2">
        <input
          placeholder="場地/場館名稱"
          className="w-1/2 rounded-md text-center"
          type="search"
        />
        <button className="rounded-md border-2 border-solid border-[#FFE8A3] bg-[#FFE8A3] bg-center bg-no-repeat px-3 text-white [background-image:url(../../pic/icon/Vector.svg)]"></button>
        <button
          className=" rounded-md border-2 border-solid border-[#FCA311] bg-[#FCA311] px-6 text-white"
          type="submit"
        >
          搜尋
        </button>
      </form> */}

      <TeamSearchBar />

      {/* 場地搜尋結果 */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="w-full text-2xl font-bold text-[#FFCC66]">
            臺北教育大學
          </h3>
          <div className="no-scrollbar flex w-full justify-start gap-10 overflow-x-auto">
            <TeamCard />
          </div>
        </div>
        {/* <div className="flex flex-col gap-4">
          <h3 className="w-full text-2xl font-bold text-[#FFCC66]">
            台北商業大學室外場
          </h3>
          <div className="no-scrollbar flex w-full justify-start gap-10 overflow-x-auto">
            <TeamCard />
          </div>
        </div> */}
      </section>
    </main>
  );
};

export default TeamList;
