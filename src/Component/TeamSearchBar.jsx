import React from "react";
import "../css/main.css";

const TeamSearchBar = () => {
  return (
    <div className="flex w-full flex-col items-start gap-1 md:gap-2">
      {/* 第一排SearchBar */}
      <div className="flex w-full items-center justify-start gap-5">
        <p className="my-auto whitespace-nowrap text-sm sm:text-base md:text-xl font-bold leading-8 tracking-wider text-white">
          球場：
        </p>
        <div className="scroll-style no-scrollbar flex w-full sm:gap-2 gap-1 overflow-x-auto">
          <label htmlFor="台北教育大學" className="">
            <input type="checkbox" id="台北教育大學" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              台北教育大學
            </div>
          </label>
          <label htmlFor="綠寶石公園" className="">
            <input type="checkbox" id="綠寶石公園" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              綠寶石公園
            </div>
          </label>
          <label htmlFor="台灣大學體育館" className="">
            <input
              type="checkbox"
              id="台灣大學體育館"
              className="peer hidden"
            />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              台灣大學體育館
            </div>
          </label>
          <label htmlFor="台北商業大學" className="">
            <input type="checkbox" id="台北商業大學" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              台北商業大學
            </div>
          </label>
          <label htmlFor="台灣大學室外場" className="">
            <input
              type="checkbox"
              id="台灣大學室外場"
              className="peer hidden"
            />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              台灣大學室外場
            </div>
          </label>
          <label htmlFor="師大附中" className="">
            <input type="checkbox" id="師大附中" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              師大附中
            </div>
          </label>
          <label htmlFor="政治大學" className="">
            <input type="checkbox" id="政治大學" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              政治大學
            </div>
          </label>
          <label htmlFor="大安高工" className="">
            <input type="checkbox" id="大安高工" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              大安高工
            </div>
          </label>
          <label htmlFor="百齡高中" className="">
            <input type="checkbox" id="百齡高中" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              百齡高中
            </div>
          </label>
          <label htmlFor="明倫高中" className="">
            <input type="checkbox" id="明倫高中" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              明倫高中
            </div>
          </label>
          <label htmlFor="陽明交通大學" className="">
            <input type="checkbox" id="陽明交通大學" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              陽明交通大學
            </div>
          </label>
          <label htmlFor="師範大學" className="">
            <input type="checkbox" id="師範大學" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              師範大學
            </div>
          </label>
          <label htmlFor="華江高中" className="">
            <input type="checkbox" id="華江高中" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              華江高中
            </div>
          </label>
        </div>
      </div>
      {/* 第二排SerchBar */}
      <div className="flex w-full items-center justify-start gap-5">
        <p className="my-auto whitespace-nowrap text-sm sm:text-base md:text-xl font-bold leading-8 tracking-wider text-white">
          日期：
        </p>
        <div className="no-scrollbar flex w-full sm:gap-2 gap-1 overflow-x-auto">
          <label htmlFor="1201" className="">
            <input type="checkbox" id="1201" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/01 (五)
            </div>
          </label>
          <label htmlFor="1202" className="">
            <input type="checkbox" id="1202" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/02 (六)
            </div>
          </label>
          <label htmlFor="1203" className="">
            <input type="checkbox" id="1203" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/03 (日)
            </div>
          </label>
          <label htmlFor="1204" className="">
            <input type="checkbox" id="1204" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/04 (一)
            </div>
          </label>
          <label htmlFor="1205" className="">
            <input type="checkbox" id="1205" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/05 (二)
            </div>
          </label>
          <label htmlFor="1206" className="">
            <input type="checkbox" id="1206" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/06 (三)
            </div>
          </label>
          <label htmlFor="1207" className="">
            <input type="checkbox" id="1207" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/07 (四)
            </div>
          </label>
          <label htmlFor="1208" className="">
            <input type="checkbox" id="1208" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/08 (五)
            </div>
          </label>
          <label htmlFor="1209" className="">
            <input type="checkbox" id="1209" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/09 (六)
            </div>
          </label>
          <label htmlFor="1210" className="">
            <input type="checkbox" id="1210" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/10 (日)
            </div>
          </label>
          <label htmlFor="1211" className="">
            <input type="checkbox" id="1211" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/11 (一)
            </div>
          </label>
          <label htmlFor="1212" className="">
            <input type="checkbox" id="1212" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/12 (二)
            </div>
          </label>
          <label htmlFor="1213" className="">
            <input type="checkbox" id="1213" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/13 (三)
            </div>
          </label>
          <label htmlFor="1214" className="">
            <input type="checkbox" id="1214" className="peer hidden" />
            <div className="text-sm sm:text-base cursor-pointer justify-center whitespace-nowrap rounded-full border border-transparent bg-black/30 sm:px-5 px-3 py-1 sm:py-2 font-medium leading-6 tracking-wider text-white/60 duration-500 hover:border-white/50 hover:text-white/80 peer-checked:border-white/80 peer-checked:bg-[#123659] peer-checked:text-white">
              12/14 (四)
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TeamSearchBar;
