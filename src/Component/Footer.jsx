import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex h-[150px] lg:justify-between justify-center gap-5 bg-black px-[5vw] lg:flex-row flex-col items-center">
      {/* Logo */}
      <img
        loading="lazy"
        src="../pic/logo.svg"
        className="xl:w-[300px] lg:w-64 w-52 justify-center shrink-0"
        alt="品牌Logo"
      />
      <div className="items-center flex flex-col md:justify-end justify-center gap-6">
        {/* 導航欄 */}
        <nav className="lg:flex justify-between gap-10 lg:visible invisible hidden">
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
        <div className="my-auto lg:self-end text-center md:text-xs text-[.5rem] font-light leading-4 tracking-wider text-white">
          © 2024 Taipei Volleyball Map - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
