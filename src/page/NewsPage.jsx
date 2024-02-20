import React from "react";
import CupGame from "../Component/CupGame";
import NewsLink from "../Component/NewsLink";

const NewsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="flex h-[240px] w-full justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-black px-[8vw] pt-5">
        <h2 className="align-bottom font-['Ubuntu'] text-[140px] font-bold leading-[300px] text-white [text-shadow:4px_4px_#FCA311]">
          News
        </h2>
      </section>
      <main className="flex w-full flex-col justify-center gap-6 bg-gradient-to-b from-[#026D8A] via-[#013A57] to-[#021A31] p-10 px-[10vw]">
        <h3 className="w-full xl:text-2xl lg:text-xl text-lg font-bold text-[#FFCC66]">熱門新聞</h3>
        <NewsLink />
        <h3 className="mt-4 w-full md:text-2xl text-xl font-bold text-[#FFCC66]">
          盃賽資訊
        </h3>
        {/* 寬度問題待解決，需更改component內的class屬性 */}
        <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center justify-between lg:gap-[2vw] gap-[5vw]">
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
          <CupGame cardWidth={"w-full shrink-0 "} />
        </div>
      </main>
    </div>
  );
};

export default NewsPage;
