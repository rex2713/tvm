import React from "react";
import CourtCard from "../Component/CourtCard";
import CourtSearch from "../Component/CourtSearch";


const MapPage = () => {
  // window.scrollTo(0, 0);

  return (
    <main>
      {/* <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div> */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#082A4D] to-[#000000]  px-[5vw] pb-10 pt-28">
        <div className="relative flex h-full w-full justify-center ">
          {/* 行政區快速跳轉 */}
          <div className="absolute top-0 flex w-full justify-center gap-4 py-4 text-base">
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-1 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              中正區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-1 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              中山區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              大同區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              大安區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              松山區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              信義區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              北投區
            </button>
            <button className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white">
              萬華區
            </button>
          </div>
          {/* 地圖 */}
          <div className="no-scrollbar h-full overflow-scroll rounded-3xl">
            <div className="w-[400vw]">
              <img className="map" src="../pic/map.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-10 bg-gradient-to-b from-[#082A4D] to-[#000000] px-[8vw] py-10">
        <CourtSearch />

        <CourtCard />
      </section>
    </main>
  );
};

export default MapPage;
