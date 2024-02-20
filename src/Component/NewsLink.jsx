import React from "react";

const NewsLink = () => {
  return (
    <div className="w-full">
      <div className=" w-full rounded-2xl bg-gradient-to-b from-white/80 to-white/10 p-[1px]">
        <div className="flex w-full flex-col items-center gap-y-4 rounded-2xl bg-[#35778F]/70 p-2 text-base text-white backdrop-blur-xl">
          <ul className="flex w-full xl:px-10 lg:px-8 md:px-6 flex-col gap-1 tracking-wider">
            <li className="xl:px-4 px-2">
              <a href="#" className="flex sm:gap-4 gap-1 hover:text-yellow-400 group py-3 duration-500 sm:items-center sm:flex-row flex-col">
                <div className="flex sm:w-1/4 w-full gap-4 text-white/70 group-hover:text-yellow-400 duration-500">
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">2023/11/28</p>
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">自由時報</p>
                </div>
                <p className="sm:w-3/4 w-full text-nowrap overflow-clip text-sm xl:text-base ">
                  多次盃賽失利捲土重來 苑裡國小女排奪華宗盃冠軍
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="xl:px-4 px-2">
              <a href="#" className="flex sm:gap-4 gap-1 hover:text-yellow-400 group py-3 duration-500 sm:items-center sm:flex-row flex-col">
                <div className="flex sm:w-1/4 w-full gap-4 text-white/70 group-hover:text-yellow-400 duration-500">
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">2023/11/23</p>
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">聯合新聞網</p>
                </div>
                <p className="sm:w-3/4 w-full text-nowrap overflow-clip text-sm xl:text-base ">
                國手踩著綠保田泥土打排球 三義鯉魚社區見證里山倡議
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="xl:px-4 px-2">
              <a href="#" className="flex sm:gap-4 gap-1 hover:text-yellow-400 group py-3 duration-500 sm:items-center sm:flex-row flex-col">
                <div className="flex sm:w-1/4 w-full gap-4 text-white/70 group-hover:text-yellow-400 duration-500">
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">2023/11/15</p>
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">自由時報</p>
                </div>
                <p className="sm:w-3/4 w-full text-nowrap overflow-clip text-sm xl:text-base ">
                礁溪國小華宗盃過關斬將 暌違多年再奪小六男子組冠軍
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="xl:px-4 px-2">
              <a href="#" className="flex sm:gap-4 gap-1 hover:text-yellow-400 group py-3 duration-500 sm:items-center sm:flex-row flex-col">
                <div className="flex sm:w-1/4 w-full gap-4 text-white/70 group-hover:text-yellow-400 duration-500">
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">2023/11/12</p>
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">聯合新聞網</p>
                </div>
                <p className="sm:w-3/4 w-full text-nowrap overflow-clip text-sm xl:text-base ">
                林書荷率台北鯨華甜蜜復仇 斬斷高雄台電開季4連勝
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="xl:px-4 px-2">
              <a href="#" className="flex sm:gap-4 gap-1 hover:text-yellow-400 group py-3 duration-500 sm:items-center sm:flex-row flex-col">
                <div className="flex sm:w-1/4 w-full gap-4 text-white/70 group-hover:text-yellow-400 duration-500">
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">2023/11/08</p>
                <p className="sm:w-1/2 text-nowrap shrink-0 lg:text-sm text-xs xl:text-base overflow-clip">自由時報</p>
                </div>
                <p className="sm:w-3/4 w-full text-nowrap overflow-clip text-sm xl:text-base ">
                苗縣全國運動會暨體育競賽績優選手 縣府頒325萬獎勵金
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsLink;
