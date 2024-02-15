import React from "react";

const NewsLink = () => {
  return (
    <div className="w-full">
      <div className=" w-full rounded-[32px] bg-gradient-to-b from-white/80 to-white/10 p-[1px]">
        <div className="flex w-full flex-col items-center gap-y-4 rounded-[32px] bg-[#35778F]/70 p-2 text-base text-white backdrop-blur-xl">
          <ul className="flex w-full px-10 flex-col gap-1 tracking-wider">
            <li className="px-4">
              <a href="#" className="flex gap-4 hover:text-yellow-400 py-3 duration-500">
                <p className="w-[12.5%]">2023/11/28</p>
                <p className="w-[12.5%]">自由時報</p>
                <p className="w-3/4 ">
                  多次盃賽失利捲土重來 苑裡國小女排奪華宗盃冠軍
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="px-4">
              <a href="#" className="flex gap-4 hover:text-yellow-400 py-3 duration-500">
                <p className="w-[12.5%]">2023/11/23</p>
                <p className="w-[12.5%]">聯合新聞網</p>
                <p className="w-3/4 ">
                  國手踩著綠保田泥土打排球 三義鯉魚社區見證里山倡議
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="px-4">
              <a href="#" className="flex gap-4 hover:text-yellow-400 py-3 duration-500">
                <p className="w-[12.5%]">2023/11/15</p>
                <p className="w-[12.5%]">自由時報</p>
                <p className="w-3/4 ">
                  礁溪國小華宗盃過關斬將 暌違多年再奪小六男子組冠軍
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="px-4">
              <a href="#" className="flex gap-4 hover:text-yellow-400 py-3 duration-500">
                <p className="w-[12.5%]">2023/11/12</p>
                <p className="w-[12.5%]">聯合新聞網</p>
                <p className="w-3/4 ">
                  林書荷率台北鯨華甜蜜復仇 斬斷高雄台電開季4連勝
                </p>
              </a>
            </li>
            <hr className="border-white/40" />
            <li className="px-4">
              <a href="#" className="flex gap-4 hover:text-yellow-400 py-3 duration-500">
                <p className="w-[12.5%]">2023/11/08</p>
                <p className="w-[12.5%]">自由時報</p>
                <p className="w-3/4 ">
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
