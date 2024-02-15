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
        scrollLeftPosition = 970;
        scrollTopPosition = 1950;
        break;
      case "中山區":
        scrollLeftPosition = 1355;
        scrollTopPosition = 1500;
        break;
      case "大同區":
        scrollLeftPosition = 900;
        scrollTopPosition = 1350;
        break;
      case "大安區":
        scrollLeftPosition = 1580;
        scrollTopPosition = 2200;
        break;
      case "松山區":
        scrollLeftPosition = 1855;
        scrollTopPosition = 1540;
        break;
      case "信義區":
        scrollLeftPosition = 2100;
        scrollTopPosition = 2080;
        break;
      case "北投區":
        scrollLeftPosition = 1000;
        scrollTopPosition = 80;
        break;
      case "士林區":
        scrollLeftPosition = 1185;
        scrollTopPosition = 610;
        break;
      case "內湖區":
        scrollLeftPosition = 2410;
        scrollTopPosition = 960;
        break;
      case "南港區":
        scrollLeftPosition = 2929;
        scrollTopPosition = 1600;
        break;
      case "萬華區":
        scrollLeftPosition = 670;
        scrollTopPosition = 2170;
        break;
      case "文山區":
        scrollLeftPosition = 2030;
        scrollTopPosition = 3280;
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
      //獲取容器寬高
      if (mapContainerRef.current) {
        const containerWidth = mapContainerRef.current.offsetWidth;
        const containerHeight = mapContainerRef.current.offsetHeight;
        //獲取座標值
        const scrollTop = mapContainerRef.current.scrollTop;
        const scrollLeft = mapContainerRef.current.scrollLeft;
        console.log(scrollTop);
        console.log(scrollLeft);
        console.log("scrollTop:", scrollTop + containerHeight / 2);
        console.log("scrollLeft:", scrollLeft + containerWidth / 2);
      }
    }, 2000);
  };

  return (
    <main>
      {/* <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div> */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#082A4D] to-[#000000]  px-[5vw] pb-10 pt-28">
        <div className="relative flex h-full w-full justify-center ">
          {/* 行政區快速跳轉 */}
          <div className="no-scrollbar absolute top-0 flex w-full gap-4 overflow-scroll px-10 py-4 text-base">
            <button
              onClick={() => handleScrollToRegion("中正區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-1 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              中正區
            </button>
            <button
              onClick={() => handleScrollToRegion("中山區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-1 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              中山區
            </button>
            <button
              onClick={() => handleScrollToRegion("大同區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              大同區
            </button>
            <button
              onClick={() => handleScrollToRegion("大安區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              大安區
            </button>
            <button
              onClick={() => handleScrollToRegion("松山區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              松山區
            </button>
            <button
              onClick={() => handleScrollToRegion("信義區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              信義區
            </button>
            <button
              onClick={() => handleScrollToRegion("北投區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              北投區
            </button>
            <button
              onClick={() => handleScrollToRegion("士林區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              士林區
            </button>
            <button
              onClick={() => handleScrollToRegion("內湖區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              內湖區
            </button>
            <button
              onClick={() => handleScrollToRegion("南港區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              南港區
            </button>
            <button
              onClick={() => handleScrollToRegion("萬華區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              萬華區
            </button>
            <button
              onClick={() => handleScrollToRegion("文山區")}
              className="shrink-0 rounded-full border border-transparent bg-black/70 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
            >
              文山區
            </button>
          </div>
          {/* 地圖 */}
          <div
            ref={mapContainerRef}
            onScroll={handleScroll}
            className="
                no-scrollbar h-full overflow-scroll rounded-3xl"
          >
            <div className="w-[4200px] ">
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
