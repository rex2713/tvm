import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AuthService from "../../services/auth-service";

const MemberNav = ({ isLogIn, setIsLogIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    setIsLogIn(false);
    window.alert("登出成功，即將為您跳轉首頁");
    navigate("/member/login");
  };
  const location = useLocation();

  return (
    <section className="flex h-[200px] lg:h-[240px] w-full flex-col items-center justify-end bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] gap-2 px-[5vw] pb-5 md:flex-row md:items-end md:justify-between">
      <h2 className="font-['Ubuntu'] text-[72px] font-bold text-white [text-shadow:4px_4px_#A8D916] leading-none lg:text-[110px] xl:text-[140px]">
        Member
      </h2>
      <div className="flex sm:items-end items-center sm:gap-8 gap-3 whitespace-nowrap ">
        {!isLogIn && (
          <Link
            to="/member/login"
            className={`sm:text-m text-sm relative rounded-full border-2 border-solid border-[#595959] bg-[#040F26] sm:px-6 px-2 sm:py-2 py-1 font-black tracking-[.2rem] text-white/80 transition-all duration-300 transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)] ${location.pathname == "/member/login" ? " border-[#E8F8B9] bg-[#98C414] duration-500 [transform:translate3d(0,4px,0)] before:bg-transparent" : ""} `}
          >
            會員登入
          </Link>
        )}
        {!isLogIn && (
          <Link
            to="/member/sign"
            className={`sm:text-m text-sm relative rounded-full border-2 border-solid  border-[#595959] bg-[#040F26] sm:px-6 px-2 sm:py-2 py-1 font-black tracking-[.2rem] text-white/80 transition-all duration-300 transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#595959] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)] ${location.pathname == "/member/sign" ? " border-[#E8F8B9] bg-[#98C414] duration-500 [transform:translate3d(0,4px,0)] before:bg-transparent" : ""} `}
          >
            註冊會員
          </Link>
        )}
        {isLogIn && (
          <button
            onClick={handleLogout}
            className="sm:text-m text-sm relative rounded-full border-2  border-solid border-[#3c3c3c]  bg-[#040F26] sm:px-6 px-4 sm:py-2 py-1 tracking-[.2rem] text-white/70 transition-all duration-[300ms] transform-style-3d  before:absolute before:bottom-0 before:left-0  before:right-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-[#3c3c3c] before:transition-all before:duration-300 before:[transform:translate3d(0,6px,-1em)] hover:border-[#E8F8B9] hover:bg-[#BACC85] hover:text-[#FFFFFF] hover:[transform:translate3d(0em,-3px,0)] hover:before:bg-[#E8F8B9] hover:before:shadow-[0_4px_0_#E8F8B9] hover:before:[transform:translate3d(0em,4px,-1em)] active:bg-[#98C414] active:[transform:translate3d(0,3px,0)] active:before:bg-[#E8F8B9] active:before:shadow-[0_0_0_#E8F8B9] active:before:[transform:translate3d(0,3px,-1em)]"
          >
            登出
          </button>
        )}
      </div>
    </section>
  );
};

export default MemberNav;
