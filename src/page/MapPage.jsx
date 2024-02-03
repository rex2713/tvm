import React from "react";
import CourtCard from "../Component/CourtCard";
import CourtSearch from "../Component/CourtSearch";

const MapPage = () => {
  window.scrollTo(0, 0);
  return (
    <main>
      <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div>
      <nav>
        <div className="flex flex-row-reverse gap-x-4 bg-black px-4 py-4 text-base">
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,中正區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,中山區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,大同區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,大安區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,松山區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,信義區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,北投區
          </button>
          <button className="rounded-full bg-white px-5 py-2 hover:bg-[#0B374D] hover:text-white">
            台北,萬華區
          </button>
        </div>
      </nav>
      <div className="h-page overflow-scroll">
        <div className="w-[1000vw]">
          <img className="map" src="../pic/map.jpg" alt="" />
        </div>
      </div>
      {/* </section> */}
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
