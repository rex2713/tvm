import React from "react";
import { Link } from "react-router-dom";
import MemberIcon from "./MemberIcon";
import "../css/hamburger.css";
import { useState } from "react";

const HeaderNavBar = ({
  isLogIn,
  setIsLogIn,
  memberIconSrc,
  setMemberIconSrc,
}) => {
  const [controller, setController] = useState(false);
  const handleHamburger = () => {
    if (controller) {
      setController(false);
    } else {
      setController(true);
    }
  };
  const handleCloseHamburger = () => {
    setController(false);
  };
  //排除console錯誤
  const setChecked = () => {};

  return (
    <header className="pointer-events-none fixed z-20 flex h-24 w-screen items-center justify-between px-[5vw] md:h-28">
      <div className="flex w-32 shrink-0 items-center justify-start lg:w-1/4">
        <img src="/pic/logo.svg" alt="" />
      </div>
      <nav className="leading-15 pointer-events-auto flex items-center justify-center">
        <ul className="invisible mx-2 mr-2 flex h-0 w-0 items-center justify-end space-x-2 rounded-full bg-gray-800/70 px-1 leading-10 text-white hover:bg-gray-800 lg:visible lg:h-11 lg:w-full lg:duration-500">
          <li>
            <Link
              to="/"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] hover:bg-white/10 lg:duration-500"
            >
              首頁
            </Link>
          </li>
          <li>
            <Link
              to="/map"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] hover:bg-white/10 lg:duration-500"
            >
              球場地圖
            </Link>
          </li>
          <li>
            <Link
              to="/team/list"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] hover:bg-white/10 lg:duration-500"
              href=""
            >
              揪團組隊
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-m rounded-full px-7 py-2 font-light tracking-[.18rem] hover:bg-white/10 lg:duration-500"
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
            <input
              type="checkbox"
              checked={controller}
              onChange={setChecked}
              onClick={handleHamburger}
            />
            {/* 三條橫線 */}
            <span></span>
            <span></span>
            <span></span>
            <ul
              id="menu"
              className="invisible flex h-0 w-0 flex-col items-center justify-center gap-[5vh] bg-[#082A4D] opacity-0"
            >
              <Link
                to={isLogIn ? "/member/Info" : "/member/login"}
                className="rounded-full font-light leading-10 text-white"
                onClick={handleCloseHamburger}
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
                  onClick={handleCloseHamburger}
                  to="/"
                  className="flex w-32 items-center justify-center rounded-full py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                >
                  首頁
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseHamburger}
                  to="/map"
                  className="flex w-32 items-center justify-center rounded-full py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                >
                  球場地圖
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseHamburger}
                  to="/team/list"
                  className="flex w-32 items-center justify-center rounded-full py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
                  href=""
                >
                  揪團組隊
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseHamburger}
                  to="/news"
                  className="flex w-32 items-center justify-center rounded-full py-2 text-lg font-light tracking-[.18rem] text-white duration-500 hover:bg-white/10"
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
