import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth-service";

const Footer = () => {
  const user = AuthService.getCurrentUser();
  let isLogIn = user && user.user !== null;
  return (
    <footer className="flex h-[250px] flex-col items-center justify-center gap-5 bg-black px-[5vw] lg:flex-row lg:justify-between">
      {/* Logo */}
      <img
        loading="lazy"
        src="../pic/logo.svg"
        className="w-52 shrink-0 justify-center lg:w-64 xl:w-[300px]"
        alt="品牌Logo"
      />
      <div className="flex flex-col items-center justify-center gap-6 md:justify-end">
        {/* 導航欄 */}
        <nav className="invisible hidden justify-between gap-10 lg:visible lg:flex">
          <Link
            to="/"
            className="text-lg font-light leading-7 tracking-widest text-white/60 duration-500 hover:text-white"
          >
            首頁
          </Link>
          <Link
            to="/map"
            className="text-lg font-light leading-7 tracking-widest text-white/60 duration-500 hover:text-white"
          >
            球場地圖
          </Link>
          <Link
            to="/team/list"
            className="text-lg font-light leading-7 tracking-widest text-white/60 duration-500 hover:text-white"
          >
            揪團組隊
          </Link>
          <Link
            to="/news"
            className="text-lg font-light leading-7 tracking-widest text-white/60 duration-500 hover:text-white"
          >
            最新消息
          </Link>
          <Link
            to={isLogIn ? "/member/Info" : "/member/login"}
            className="text-lg font-light leading-7 tracking-widest text-white/60 duration-500 hover:text-white"
          >
            會員中心
          </Link>
        </nav>
        {/* 版權宣告 */}
        <div className="my-auto text-center text-[.5rem] font-light leading-4 tracking-wider text-white md:text-xs lg:self-end">
          © 2024 Taipei Volleyball Map - All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
