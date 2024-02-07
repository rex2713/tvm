import React from "react";
import { Link } from "react-router-dom";

const MemberNav = ({ isLogIn, setIsLogIn }) => {
  return (
    <section className="flex h-[240px] w-full justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 pt-5">
      <h2 className="align-bottom font-['Ubuntu'] text-[140px] font-bold leading-[300px] text-white [text-shadow:4px_4px_#A8D916]">
        Member
      </h2>
      <div className="mb-4 flex items-end gap-8  whitespace-nowrap ">
        {!isLogIn && (
          <Link
            to="/member/login"
            className="text-m relative rounded-full  border-2  border-solid  border-[#3c3c3c] bg-[#040F26] px-6 py-2 tracking-[.2rem] text-white/70 transition-all duration-[300ms] transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#3c3c3c] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)]"
          >
            會員登入
          </Link>
        )}
        {!isLogIn && (
          <Link
            to="/member/sign"
            className="text-m relative rounded-full border-2  border-solid  border-[#3c3c3c]  bg-[#040F26] px-6 py-2 tracking-[.2rem]  text-white/70 transition-all duration-[300ms] transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#3c3c3c] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)]"
          >
            註冊會員
          </Link>
        )}
        {isLogIn && (
          <Link
            to="/member/Info"
            className="text-m relative rounded-full border-2  border-solid border-[#3c3c3c]  bg-[#040F26] px-6 py-2 tracking-[.2rem] text-white/70 transition-all duration-[300ms] transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#3c3c3c] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)]"
          >
            會員資料
          </Link>
        )}
      </div>
    </section>
  );
};

export default MemberNav;
