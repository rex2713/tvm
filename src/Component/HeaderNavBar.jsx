import React from "react";
import { Link } from "react-router-dom";
import MemberIcon from "./MemberIcon";

const HeaderNavBar = () => {
  return (
    <header className="bg-parent fixed z-20 flex w-full justify-between px-20">
      <div className="flex">
        <div className="h-15 mr-2 shrink-0 rounded-full pt-10">
          <img src="../pic/logo.svg" alt="" />
        </div>
      </div>
      <nav className="leading-15 0 ">
        <div className="flex w-180 justify-between gap-x-8 ">
          <ul className="mt-[60px] flex h-10 w-160 justify-around space-x-5 rounded-full  bg-gray-800 px-5 leading-10 text-white">
            <li>
              <Link to="/" className="font-light">
                首頁
              </Link>
            </li>
            <li>
              <Link to="/map" className="font-light">
                球場地圖
              </Link>
            </li>
            <li>
              <Link to="/team/list" className="font-light" href="">
                揪團組隊
              </Link>
            </li>
            <li>
              <Link to="/news" className="font-light" href="">
                最新消息
              </Link>
            </li>
          </ul>
          <Link
            to="/member/login"
            className="rounded-full font-light leading-10 text-white"
          >
            <div className="mt-[40px]">
              <MemberIcon />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
