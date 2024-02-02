import React from "react";
import CourtCard from "../Component/CourtCard";
import CourtSearch from "../Component/CourtSearch";

const MapPage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      {/* <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div> */}
      <section className="h-screen bg-gradient-to-b from-[#082A4D] to-[#000000]  px-40">
        <div className="relative flex h-[90%] justify-center">
          <div className="absolute top-0 flex justify-center gap-x-4 bg-transparent w-full py-4 text-base">
            <button className="rounded-full border border-transparent  bg-black px-5 py-1 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              中正區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-1 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              中山區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              大同區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              大安區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              松山區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              信義區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              北投區
            </button>
            <button className="rounded-full border border-transparent bg-black px-5 py-2 text-white hover:border-[rgba(255,255,255,.5)] hover:bg-[#0B374D] hover:text-white">
              萬華區
            </button>
          </div>
          <div className="no-scrollbar h-full overflow-scroll rounded-3xl">
            <div className="w-[400vw]">
              <img className="map" src="../pic/map.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-10 bg-gradient-to-b from-[#082A4D] to-[#000000] px-40 py-5">
        <CourtSearch />
        <div className="grid grid-cols-3 gap-x-20 gap-y-14 ">
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
          <CourtCard />
        </div>
      </section>
    </main>
  );
};

export default MapPage;
