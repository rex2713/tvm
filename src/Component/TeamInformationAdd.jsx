import React from "react";

const TeamInformationAdd = () => {
  return (
    <div className="flex items-center gap-x-4 rounded-2xl bg-[#2A4A64] p-4 text-base">
      {/* 左半部-照片 */}
      <figure className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white">
        <img src="../../pic/big_plus.svg" alt="" />
      </figure>
      {/* 右半部-資訊 */}
      <div className="mx-auto flex w-fit flex-col justify-center">
        <div className="relative top-[16px] flex h-8 w-fit  items-center justify-center rounded-md bg-[#BFC9D2]">
          {/* <div className="h-8 rounded-l-md bg-[#123659] px-2 leading-8"></div> */}
          <div className="px-2 py-1 text-[#123659]">舉球、自由球員</div>
          <button className="h-8 rounded-r-md bg-[#0B214D] p-2 leading-8">
            <img
              className="w-4"
              src="../../pic/detail_information_gray.svg"
              alt=""
            />
          </button>
        </div>
        <select
          className="relative top-[-16px] h-8 w-full bg-white/0 text-transparent"
          name=""
          id="position"
        >
          <option value="">主攻</option>
          <option value="">副攻</option>
          <option value="">舉球</option>
          <option value="">自由</option>
          <option value="">欄中</option>
        </select>
      </div>
    </div>
  );
};

export default TeamInformationAdd;
