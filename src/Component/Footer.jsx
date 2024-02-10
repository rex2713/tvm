import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex h-[150px] justify-between bg-black px-20">
      {/* Logo */}
      <img
        loading="lazy"
        src="../pic/logo.svg"
        className="w-[300px] justify-center"
        alt="品牌Logo"
      />
      <div className="mt-10 flex flex-col">
        {/* 導航欄 */}
        <nav className="flex justify-between gap-10">
          <Link
            to="/"
            className="text-lg font-light leading-7 tracking-widest text-white/60 hover:text-white duration-500"
          >
            首頁
          </Link>
          <Link
            to="/map"
            className="text-lg font-light leading-7 tracking-widest text-white/60 hover:text-white duration-500"
          >
            球場地圖
          </Link>
          <Link
            to="/team/list"
            className="text-lg font-light leading-7 tracking-widest text-white/60 hover:text-white duration-500"
          >
            揪團組隊
          </Link>
          <Link
            to="/news"
            className="text-lg font-light leading-7 tracking-widest text-white/60 hover:text-white duration-500"
          >
            最新消息
          </Link>
          <Link
            to="/member/login"
            className="text-lg font-light leading-7 tracking-widest text-white/60 hover:text-white duration-500"
          >
            會員中心
          </Link>
        </nav>
        {/* 版權宣告 */}
        <div className="my-auto self-end text-xs font-light leading-4 tracking-wider text-white">
          © 2024 Taipei Volleyball Map - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
