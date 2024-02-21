import React from "react";
import CupGame from "../Component/CupGame";
import NewsLink from "../Component/NewsLink";

const NewsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <section className="flex h-[200px] lg:h-[240px] w-full items-end bg-gradient-to-b from-[#082A4D] via-[#041526] to-black px-[5vw] pb-5">
        <h2 className="font-['Ubuntu'] text-[72px] font-bold leading-none text-white [text-shadow:4px_4px_#ff6666] lg:text-[110px] xl:text-[140px]">
          News
        </h2>
      </section>
      <main className="flex w-full flex-col justify-center gap-6 bg-gradient-to-b from-[#026D8A] via-[#013A57] to-[#021A31] p-10 px-[10vw]">
        <h3 className="w-full text-lg font-bold text-[#FFCC66] lg:text-xl xl:text-2xl">
          熱門新聞
        </h3>
        <NewsLink />
        <h3 className="mt-4 w-full text-xl font-bold text-[#FFCC66] md:text-2xl">
          盃賽資訊
        </h3>
        {/* 寬度問題待解決，需更改component內的class屬性 */}
        <div className="grid w-full grid-cols-1 place-items-center justify-between gap-[5vw] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[2vw]">
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
