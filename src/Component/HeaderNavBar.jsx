import React from "react";
import { Link } from "react-router-dom";
import MemberIcon from "./MemberIcon";

const HeaderNavBar = () => {
  return (
    <header className="bg-parent fixed z-20 flex w-full h-28 justify-between px-20 items-center">
      <div className="flex">
        <div className="h-15 mr-2 shrink-0 rounded-full ">
          <img src="../pic/logo.svg" alt="" />
        </div>
      </div>
      <nav className="leading-15 0 ">
        <div className="flex justify-between gap-x-2 items-center">
          <ul className="mx-2 flex h-11 items-center justify-center space-x-2 rounded-full  bg-gray-800 px-1 leading-10 text-white">
            <li>
              <Link
                to="/"
                className="rounded-full px-8 py-2 font-light duration-500 hover:bg-white/20"
              >
                首頁
              </Link>
            </li>
            <li>
              <Link
                to="/map"
                className="rounded-full px-8 py-2 font-light duration-500 hover:bg-white/20"
              >
                球場地圖
              </Link>
            </li>
            <li>
              <Link
                to="/team/list"
                className="rounded-full px-8 py-2 font-light duration-500 hover:bg-white/20"
                href=""
              >
                揪團組隊
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="rounded-full px-8 py-2 font-light duration-500 hover:bg-white/20"
                href=""
              >
                最新消息
              </Link>
            </li>
          </ul>
          <Link
            to="/member/login"
            className="rounded-full font-light leading-10 text-white"
          >
            <div className="">
              <MemberIcon />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
