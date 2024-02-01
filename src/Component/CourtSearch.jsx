import React from "react";

const CourtSearch = () => {
  return (
    <form className="flex justify-center gap-x-2">
      <input
        placeholder="場地/場館名稱"
        className="w-1/2 rounded-md text-center"
        type="search"
      />
      <button className="rounded-md border-2 border-solid border-[#FFE8A3] bg-[#FFE8A3] bg-center bg-no-repeat px-3 text-white [background-image:url(../../pic/icon/Vector.svg)]"></button>
      <button
        className=" rounded-md border-2 border-solid border-[#FCA311] bg-[#FCA311] px-6 text-white"
        type="submit"
      >
        搜尋
      </button>
    </form>
  );
};

export default CourtSearch;
