import React from "react";
import CourtCard from "../Component/CourtCard";
import { useRef } from "react";

const MapPage = () => {
  // window.scrollTo(0, 0);
  const mapContainerRef = useRef(null);

  //處理對應地區按鍵
  const handleScrollToRegion = (region) => {
    let scrollLeftPosition;
    let scrollTopPosition;
    switch (region) {
      case "中正區":
        scrollLeftPosition = 1000;
        scrollTopPosition = 2300;
        break;
      case "中山區":
        scrollLeftPosition = 1100;
        scrollTopPosition = 1750;
        break;
      case "大同區":
        scrollLeftPosition = 800;
        scrollTopPosition = 1900;
        break;
      case "大安區":
        scrollLeftPosition = 1500;
        scrollTopPosition = 2400;
        break;
      case "松山區":
        scrollLeftPosition = 1900;
        scrollTopPosition = 1500;
        break;
      case "信義區":
        scrollLeftPosition = 2100;
        scrollTopPosition = 2200;
        break;
      case "北投區":
        scrollLeftPosition = 1100;
        scrollTopPosition = 0;
        break;
      case "萬華區":
        scrollLeftPosition = 600;
        scrollTopPosition = 2400;
        break;
    }

    mapContainerRef.current.scrollTo({
      left: scrollLeftPosition,
      top: scrollTopPosition,
      behavior: "smooth",
    });
  };

  //監聽滾動數值並console
  let scrollTimer = null;
  const handleScroll = () => {
    //清除計時器
    clearTimeout(scrollTimer);
    //延遲兩秒顯示目前scroll位置
    scrollTimer = setTimeout(() => {
      const scrollTop = mapContainerRef.current.scrollTop;
      const scrollLeft = mapContainerRef.current.scrollLeft;
      console.log("scrollTop:", scrollTop);
      console.log("scrollLeft:", scrollLeft);
    }, 2000);
  };

  return (
    <main>
      {/* <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div> */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#082A4D] to-[#000000]  px-[5vw] pb-10 pt-28">
        <div className="relative flex h-full w-full justify-center ">
          {/* 行政區快速跳轉 */}
          <div className="absolute top-0 flex w-full justify-center gap-4 py-4 text-base">
            <button
              onClick={() => handleScrollToRegion("中正區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-1 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              中正區
            </button>
            <button
              onClick={() => handleScrollToRegion("中山區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-1 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              中山區
            </button>
            <button
              onClick={() => handleScrollToRegion("大同區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              大同區
            </button>
            <button
              onClick={() => handleScrollToRegion("大安區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              大安區
            </button>
            <button
              onClick={() => handleScrollToRegion("松山區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              松山區
            </button>
            <button
              onClick={() => handleScrollToRegion("信義區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              信義區
            </button>
            <button
              onClick={() => handleScrollToRegion("北投區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              北投區
            </button>
            <button
              onClick={() => handleScrollToRegion("萬華區")}
              className="rounded-full border border-transparent bg-black/60 px-5 py-2 text-sm tracking-[0.2rem] text-white/60 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              萬華區
            </button>
          </div>
          {/* 地圖 */}
          <div
            ref={mapContainerRef}
            onScroll={handleScroll}
            className="
                no-scrollbar h-full overflow-scroll rounded-3xl"
          >
            <div className="w-[300vw] ">
              <img className="map" src="../pic/map.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-10 bg-gradient-to-b from-[#082A4D] to-[#000000] px-[8vw] py-10">
        <CourtCard />
      </section>
    </main>
  );
};

export default MapPage;
