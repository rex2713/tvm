import React from "react";
import { Link, useLocation } from "react-router-dom";

const TeamNav = () => {
  const location = useLocation();
  return (
    <section className="flex h-[240px] w-full justify-between bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 pt-5">
      <h2 className="align-bottom font-['Ubuntu'] text-[140px] font-bold leading-[300px] text-white [text-shadow:4px_4px_#FCA311]">
        Teams
      </h2>
      <div className="mb-4 flex items-end gap-8  whitespace-nowrap ">
        <Link
          to="/team/list"
          className={`text-m relative rounded-full  border-2  border-solid  border-[#595959] bg-[#040F26] px-6 py-2 tracking-[.2rem] text-white/80 font-black transition-all duration-300 transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] ${location.pathname == "/team/list" ? " border-[#FFCC66] bg-[#FCA311] [transform:translate3d(0,4px,0)] before:bg-transparent duration-500" : ""} `}
        >
          隊伍列表
        </Link>
        <Link
          to="/team/create"
          className={`text-m relative rounded-full  border-2  border-solid  border-[#595959] bg-[#040F26] px-6 py-2 tracking-[.2rem] text-white/80 font-black transition-all duration-300 transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] ${location.pathname == "/team/create" ? " border-[#FFCC66] bg-[#FCA311] [transform:translate3d(0,4px,0)] before:bg-transparent duration-500" : ""} `}
        >
          建立隊伍
        </Link>
        <Link
          to="/team/manage"
          className={`text-m relative rounded-full  border-2  border-solid  border-[#595959] bg-[#040F26] px-6 py-2 tracking-[.2rem] text-white/80 font-black transition-all duration-300 transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] ${location.pathname == "/team/manage" ? " border-[#FFCC66] bg-[#FCA311] [transform:translate3d(0,4px,0)] before:bg-transparent duration-500" : ""} `}
        >
          隊伍管理
        </Link>
      </div>
    </section>
  );
};

export default TeamNav;
