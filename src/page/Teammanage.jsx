import React from "react";
import TeamInformation from "../Component/TeamInforMation";
import TeamInformationAdd from "../Component/TeamInformationAdd";

const TeamManage = () => {
  window.scrollTo(0, 0);
  return (
    <main className="flex w-full flex-col gap-y-10  bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      {/* 隊伍資訊-未展開 */}
      <div>
        {/* title */}
        <div className="y-4 flex w-full items-end justify-between px-10">
          <div className="flex gap-x-4">
            <h3 className="text-[40px] font-bold text-[#FFCC66]">
              Durian Team
            </h3>
            <figure className="my-auto flex items-center">
              <img src="../../pic/edit.svg" alt="" />
            </figure>
          </div>

          <p className="mx-4 h-8 w-1/2 border-t-2 border-dashed border-[#FFFFFF]/25"></p>
          <p className="text-[28px] font-medium leading-[75px] text-white">
            12/13(三)下午
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-4  rounded-3xl bg-[#123659] px-20 py-4 text-[28px] font-medium  text-white">
          {/* header */}
          <div className="flex w-full items-center justify-between ">
            <div className="flex gap-x-2">
              <p>球場:</p>
              <h3 className="">台北商業大學室外場</h3>
            </div>
            <button className="flex h-6 items-center gap-x-1 rounded-xl bg-[#B8C3CD] px-2">
              <span className="text-[14px] text-[#123659]">詳細內容</span>
              <img className="" src="../../pic/detail_information.svg" alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* 隊伍資訊-已展開 */}
      <div>
        {/* title */}
        <div className="flex w-full items-end justify-between px-10">
          <div className="flex gap-x-4">
            <h3 className="text-[40px] font-bold text-[#FFCC66]">
              Coconut Team
            </h3>
            <figure className="my-auto flex items-center">
              <img src="../../pic/edit.svg" alt="" />
            </figure>
          </div>

          <p className="mx-4 h-8 w-1/2 border-t-2 border-dashed border-[#FFFFFF]/25"></p>
          <p className="text-[28px] font-medium leading-[75px] text-white">
            12/10(日)下午
          </p>
        </div>
        <div className="flex w-full flex-col gap-y-4  rounded-3xl bg-[#123659] px-20 pb-6 pt-4 text-[28px] font-medium  text-white">
          {/* header */}
          <div className="flex w-full items-center justify-between ">
            <div className="flex gap-x-2">
              <p>球場:</p>
              <h3 className="">台北商業大學室外場</h3>
            </div>
            <button className="flex h-6 items-center gap-x-1 rounded-xl bg-[#B8C3CD] px-2">
              <span className="text-[14px] text-[#123659]">隱藏內容</span>
              <img
                className="rotate-180"
                src="../../pic/detail_information.svg"
                alt=""
              />
            </button>
          </div>
          {/* teamMember */}
          <div className="flex flex-col gap-y-2">
            <p className="text-xl">隊員</p>
            <div className="grid grid-cols-3 gap-x-7 gap-y-4 ">
              {/* 隊員卡片 */}
              <TeamInformation />
              <TeamInformation />
              <TeamInformation />
              <TeamInformation />
              <TeamInformation />
              <TeamInformationAdd />
            </div>
          </div>
          {/* footer */}
          <div className="flex justify-between">
            {/* 留言板 */}
            <div className="flex w-[55%] flex-col gap-y-2">
              <p className="text-xl">留言板</p>
              <div className="flex h-[200px]  flex-col justify-between rounded-2xl bg-[#B8C3CD] p-4 font-normal">
                <div className="text-base text-black ">
                  <div className="flex gap-x-4">
                    <p className="text-center text-sm leading-[24px]">
                      2023.12.4 15:23
                    </p>
                    <p>隊員A:</p>
                    <p>明天幾點在球場集合?</p>
                  </div>
                </div>
                <input
                  className="h-fit w-full rounded-md text-base text-black"
                  type="text"
                />
              </div>
            </div>
            {/* 公告 */}
            <div className="flex w-[43%] flex-col  gap-y-2">
              <p className="text-xl">公告</p>
              <div className="flex h-[200px] flex-col justify-between rounded-2xl bg-[#B8C3CD] p-4 font-normal">
                <div className="text-base text-black ">
                  <div className="flex gap-x-4">
                    <p className="text-center text-sm leading-[24px]">
                      2023.12.4 15:23
                    </p>
                    <p>6點在球場集合，大家自己帶裝備</p>
                  </div>
                </div>
                {/* <input
                  className="h-fit w-full rounded-md text-base text-black"
                  type="text"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamManage;
