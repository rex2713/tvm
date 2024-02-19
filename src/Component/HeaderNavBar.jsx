import React from "react";
import { Link } from "react-router-dom";
import MemberIcon from "./MemberIcon";

const HeaderNavBar = ({
  isLogIn,
  setIsLogIn,
  memberIconSrc,
  setMemberIconSrc,
}) => {
  return (
    <header className="bg-parent fixed z-20 flex h-28 w-full items-center justify-between px-[5vw]">
      <div className="flex">
        <div className="h-15 mr-2 shrink-0 rounded-full ">
          <img src="../pic/logo.svg" alt="" />
        </div>
      </div>
      <nav className="leading-15 0 ">
        <div className="flex items-center justify-between gap-x-2">
          <ul className="mx-2 flex h-11 items-center justify-center space-x-2 rounded-full  bg-gray-800/70 px-1 leading-10 text-white duration-500 hover:bg-gray-800">
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
            className="rounded-full font-light leading-10 text-white"
          >
            <div className="">
              <MemberIcon
                memberIconSrc={memberIconSrc}
                setMemberIconSrc={setMemberIconSrc}
              />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
