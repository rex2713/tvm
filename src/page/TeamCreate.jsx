import React from "react";
import TeamCard from "../Component/TeamCard";

const TeamCreate = () => {
  window.scrollTo(0, 0);
  return (
    // padding有調整過
    <main className="flex w-full justify-around bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      {/* 左側創建隊伍表單 */}
      <div className="flex w-3/5 flex-col gap-y-4 ">
        <h3 className="mt-4 w-full text-2xl font-bold text-[#FFCC66]">
          隊伍資訊
        </h3>
        <form className="flex flex-col gap-y-5 rounded-[20px] bg-[#114273] px-10 py-8 text-xl text-white">
          <label className="flex justify-between">
            隊伍名稱
            <input className="h-8 w-4/5 rounded-md text-black" type="text" />
          </label>
          <label className="flex justify-between">
            選擇球場
            <select className="h-8 w-4/5 rounded-md text-black">
              <option value="">台北商業大學</option>
              <option value="">台北師範大學</option>
            </select>
          </label>
          <label className="flex justify-between">
            選擇日期
            <input className="h-8 w-4/5 rounded-md text-black" type="date" />
          </label>
          <label className="flex justify-between">
            增加隊員
            <div className="flex w-4/5 flex-col gap-y-3">
              <input className="h-8 w-full rounded-md text-black" type="text" />
              <div className="flex gap-x-2">
                <div className="flex aspect-[3/4] w-1/5 flex-col items-center gap-y-4  rounded-2xl bg-[#123659] px-9 py-4">
                  <div className="whitespace-nowrap text-center text-base font-medium tracking-wider">
                    隊長
                  </div>
                </div>
                <div className="flex w-1/5 flex-col items-center justify-between gap-y-4  rounded-2xl bg-[#123659] px-9 py-4">
                  <div className="whitespace-nowrap text-center text-base font-medium tracking-wider">
                    隊員一
                  </div>
                  <button className="w-full">
                    <img
                      src="../../pic/big_plus.svg"
                      className="mb-5 w-full overflow-hidden fill-orange-300 object-contain object-center"
                    />
                  </button>
                </div>
              </div>
            </div>
          </label>
          <label className="flex justify-between">
            徵求隊員
            <div className="flex w-4/5 flex-col gap-y-2">
              <input className="h-8 w-full rounded-full" type="text" />
              <div className="flex gap-x-2 text-sm">
                <button className="flex items-center gap-x-1 rounded-full bg-[#41688F] px-2">
                  主攻 <img src="../../pic/small_plus.svg" alt="主攻手" />
                </button>
                <button className="flex items-center gap-x-1 rounded-full bg-[#41688F] px-2">
                  欄中 <img src="../../pic/small_plus.svg" alt="欄中手" />
                </button>
                <button className="flex items-center gap-x-1 rounded-full bg-[#41688F] px-2">
                  自由 <img src="../../pic/small_plus.svg" alt="自由球員" />
                </button>
                <button className="flex items-center gap-x-1 rounded-full bg-[#41688F] px-2">
                  舉球 <img src="../../pic/small_plus.svg" alt="舉球員" />
                </button>
                <button className="flex items-center gap-x-1 rounded-full bg-[#41688F] px-2">
                  副攻 <img src="../../pic/small_plus.svg" alt="副攻手" />
                </button>
              </div>
            </div>
          </label>
          <label className="flex items-start justify-between">
            備註
            <textarea
              className="w-4/5 rounded-md text-black"
              name=""
              id=""
              cols="50"
              rows="3"
            ></textarea>
          </label>
        </form>
      </div>
      {/* 右側即時預覽 */}
      <div className="flex w-1/4 flex-col items-center gap-y-4">
        <h3 className="mt-4 w-full text-2xl font-bold text-[#FFCC66]">
          即時預覽
        </h3>
        <TeamCard />
      </div>
    </main>
  );
};

export default TeamCreate;
