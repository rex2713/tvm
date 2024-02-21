import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TeamNav = () => {
  const location = useLocation();
  const isLogin = localStorage.getItem("user") !== null;

  const handleToTeamCreate = () => {
    if (!isLogin) 
    // window.alert("請先登入");
    Swal.fire({
      title: "請先登入",
      icon: "warning",
      background: "#123659",
      color: "#FFFFFF",
      confirmButtonColor: "#0492D9",
    });
  };
  return (
    <section className="flex h-[200px] w-full flex-col items-center justify-end gap-2 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-[5vw] pb-5 md:flex-row md:items-end md:justify-between lg:h-[240px]">
      <h2 className="font-['Ubuntu'] text-[72px] font-bold leading-none text-white [text-shadow:4px_4px_#FCA311] lg:text-[110px] xl:text-[140px]">
        Teams
      </h2>
      <div className="flex items-center gap-3 whitespace-nowrap sm:items-end sm:gap-8 ">
        <Link
          to="/team/list"
          className={`sm:text-m relative rounded-full border-2  border-solid border-[#595959] bg-[#040F26] px-2 py-1 text-sm font-black tracking-[.2rem] text-white/80 transition-all duration-300 transform-style-3d before:absolute before:bottom-0  before:left-0 before:right-0 before:top-0  before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] sm:px-6 sm:py-2 ${location.pathname == "/team/list" ? " border-[#FFCC66] bg-[#FCA311] duration-500 [transform:translate3d(0,4px,0)] before:bg-transparent" : ""} `}
        >
          隊伍列表
        </Link>
        <Link
          onClick={handleToTeamCreate}
          to={isLogin ? "/team/create" : "/member/login"}
          className={`sm:text-m relative rounded-full border-2  border-solid border-[#595959] bg-[#040F26] px-2 py-1 text-sm font-black tracking-[.2rem] text-white/80 transition-all duration-300 transform-style-3d before:absolute before:bottom-0  before:left-0 before:right-0 before:top-0  before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] sm:px-6 sm:py-2 ${location.pathname == "/team/create" ? " border-[#FFCC66] bg-[#FCA311] duration-500 [transform:translate3d(0,4px,0)] before:bg-transparent" : ""} `}
        >
          建立隊伍
        </Link>
        <Link
          onClick={handleToTeamCreate}
          to={isLogin ? "/team/manage" : "/member/login"}
          className={`sm:text-m relative rounded-full border-2  border-solid border-[#595959] bg-[#040F26] px-2 py-1 text-sm font-black tracking-[.2rem] text-white/80 transition-all duration-300 transform-style-3d before:absolute before:bottom-0  before:left-0 before:right-0 before:top-0  before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#FFCC66] hover:bg-[#FCB94C] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#FFCC66] hover:before:shadow-[0_4px_0_#FFCC66] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#FCA311] active:[transform:translate3d(0,3px,0)] active:before:bg-[#FFCC66] active:before:shadow-[0_0_0_#FFCC66] active:before:[transform:translate3d(0,3px,-1em)] sm:px-6 sm:py-2 ${location.pathname == "/team/manage" ? " border-[#FFCC66] bg-[#FCA311] duration-500 [transform:translate3d(0,4px,0)] before:bg-transparent" : ""} `}
        >
          隊伍管理
        </Link>
      </div>
    </section>
  );
};

export default TeamNav;
