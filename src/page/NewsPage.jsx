import React from "react";
import CupGame from "../Component/CupGame";
import NewsLink from "../Component/NewsLink";

const NewsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="flex h-[240px] w-full justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 pt-5">
        <h2 className="align-bottom font-['Ubuntu'] text-[140px] font-bold leading-[300px] text-white [text-shadow:4px_4px_#FCA311]">
          News
        </h2>
      </section>
      <main className="flex w-full flex-col justify-center gap-y-10 bg-gradient-to-b from-[#026D8A] via-[#013A57] to-[#021A31] p-10 px-40">
        <h3 className="w-full text-2xl font-bold text-[#FFCC66]">熱門新聞</h3>
        <NewsLink />
        <h3 className="mt-4 w-full text-2xl font-bold text-[#FFCC66]">
          杯賽資訊
        </h3>
        {/* 寬度問題待解決，需更改component內的class屬性 */}
        <div className="grid w-full grid-cols-3 place-items-center gap-9">
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
          <CupGame cardWidth={"w-5/6 shrink-0 "} />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
