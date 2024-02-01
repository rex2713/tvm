import React from "react";
import TeamSearchBar from "../Component/TeamSearchBar";
import TeamCard from "../Component/TeamCard";
import NewsLink from "../Component/NewsLink";
import CupGame from "../Component/CupGame";
import IndexTitle from "../Component/IndexTitle";
import Loading from "../Component/Loading";
import { useState, useRef } from "react";
import "../css/main.css";

const HomePage = () => {
  window.scrollTo(0, 0);
  // loading動畫延遲5秒
  const [delayLoading, setDelayLoading] = useState(true);
  setTimeout(() => {
    setDelayLoading(false);
  }, 6000);

  const [indexDelayLoading, setIndexDelayLoading] = useState(true);
  setTimeout(() => {
    setIndexDelayLoading(false);
  }, 2100);

  // 點擊按鈕滾動至指定元素
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/*<!-- 主要內容 -->*/}
      <main className="relative ">
        {/* 首頁-主視覺 */}
        <section className="relative h-page bg-[url('../../pic/homepage-bg.jpg')] bg-cover px-20">
          {/* <div className="relative flex h-160 justify-around"> */}
          {/* <div className="absolute left-0 z-10 h-full"> */}
          <div className="h-[100px]"></div>
          <div className="">
            <div className="absolute left-0 top-0 z-20 w-full ">
              {delayLoading ? <Loading /> : <></>}
            </div>
            <div className="absolute left-0 top-0">
              {indexDelayLoading ? <></> : <IndexTitle />}
            </div>
          </div>
          <button
            onClick={handleClick}
            className="absolute bottom-10 left-[48vw] rounded-full bg-white/20 p-4 text-white shadow-md shadow-black/50 hover:bg-white/40"
          >
            開始瀏覽
          </button>
        </section>
        {/* 首頁-地圖 */}
        <section
          ref={ref}
          className="h-page bg-gradient-to-b from-cyan-800 to-blue-900  px-40"
        >
          <div className="h-page overflow-scroll">
            <div className="w-[1000vw]">
              <img className="map" src="../pic/map.jpg" alt="" />
            </div>
          </div>
        </section>
        {/* 首頁-隊伍 */}
        <section className="flex h-page w-full overflow-hidden bg-[url('../pic/team_bg.svg')] bg-cover">
          <div className="flex w-full">
            {/* 左半裝飾字-Teams */}
            <h2 className="h-page w-[20%] text-bacd font-bold text-white [text-orientation:sideways] [text-shadow:5px_-5px_#74D3E5] [writing-mode:vertical-lr]">
              Teams
            </h2>
            {/* 右半內容區 */}
            <div className="flex w-[80%] flex-col pr-20">
              {/* 上半部篩選器 */}
              <div className="mb-10 mt-[50px] h-[110px] w-full ">
                <TeamSearchBar />
              </div>
              {/* 下半部TeamCard */}
              <div className="no-scrollbar flex w-full justify-start gap-10 overflow-x-auto ">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
              </div>
            </div>
          </div>
        </section>
        {/* 首頁-最新消息*/}
        <section className="flex h-page w-full flex-row-reverse bg-gradient-to-b from-[#026D8A] via-[#011E37] via-[#01405E] to-[#030b17] pt-20">
          <h2 className="h-page w-1/5 overflow-hidden text-bacd font-bold text-white [text-orientation:sideways] [text-shadow:5px_-5px_#74D3E5] [writing-mode:vertical-lr]">
            News
          </h2>
          <div className="flex w-4/5 flex-col  gap-y-4 px-20">
            <h3 className="w-full text-2xl font-bold text-[#FFCC66]">
              熱門新聞
            </h3>
            <NewsLink />
            <h3 className="mt-4 w-full text-2xl font-bold text-[#FFCC66]">
              杯賽資訊
            </h3>
            <div className="no-scrollbar flex w-full justify-start gap-10 overflow-x-auto">
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
              <CupGame cardWidth={"w-1/3 shrink-0 "} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
