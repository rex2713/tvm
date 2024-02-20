import React from "react";
import { Link } from "react-router-dom";
import MemberIcon from "./MemberIcon";
import "../css/hamburger.css";

const HeaderNavBar = ({
  isLogIn,
  setIsLogIn,
  memberIconSrc,
  setMemberIconSrc,
}) => {
  return (
    <header className="bg-parent pointer-events-none fixed z-20 flex h-28 w-full items-center justify-between px-[5vw]">
      <div className="flex">
        <div className="h-15 mr-2 shrink-0 rounded-full ">
          <img src="../pic/logo.svg" alt="" />
        </div>
      </div>
      <nav className="leading-15 pointer-events-auto flex items-center justify-center gap-2">
        <ul className="invisible mx-2 flex h-0 items-center justify-center space-x-2 rounded-full bg-gray-800/70 px-1  leading-10 text-white hover:bg-gray-800 lg:visible lg:h-11 lg:duration-500">
          <li>
            <Link
              to="/"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] duration-500 hover:bg-white/10"
            >
              首頁
            </Link>
          </li>
          <li>
            <Link
              to="/map"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] duration-500 hover:bg-white/10"
            >
              球場地圖
            </Link>
          </li>
          <li>
            <Link
              to="/team/list"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] duration-500 hover:bg-white/10"
              href=""
            >
              揪團組隊
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] duration-500 hover:bg-white/10"
              href=""
            >
              最新消息
            </Link>
          </li>
        </ul>
        <Link
          to={isLogIn ? "/member/Info" : "/member/login"}
          className="invisible rounded-full font-light leading-10 text-white lg:visible"
        >
          <div className="">
            <MemberIcon
              memberIconSrc={memberIconSrc}
              setMemberIconSrc={setMemberIconSrc}
            />
          </div>
        </Link>

        {/* 手機版漢堡按鈕 */}
        <div role="navigation" className="lg:collapse lg:w-0">
          <div id="menuToggle">
            <input type="checkbox" />
            {/* 三條橫線 */}
            <span></span>
            <span></span>
            <span></span>
            <ul
              id="menu"
              className="invisible flex h-0 w-0 flex-col items-center justify-center bg-[#082A4D] opacity-0 gap-[5vh]"
            >
              <Link
                to={isLogIn ? "/member/Info" : "/member/login"}
                className="rounded-full font-light leading-10 text-white"
              >
                <div className="">
                  <MemberIcon
                    memberIconSrc={memberIconSrc}
                    setMemberIconSrc={setMemberIconSrc}
                  />
                </div>
              </Link>
              <li>
                <Link
                  to="/"
                  className="rounded-full flex w-32 items-center justify-center py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                >
                  首頁
                </Link>
              </li>
              <li>
                <Link
                  to="/map"
                  className="rounded-full flex w-32 items-center justify-center py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                >
                  球場地圖
                </Link>
              </li>
              <li>
                <Link
                  to="/team/list"
                  className="rounded-full flex w-32 items-center justify-center py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                  href=""
                >
                  揪團組隊
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="rounded-full flex w-32 items-center justify-center py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                  href=""
                >
                  最新消息
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
