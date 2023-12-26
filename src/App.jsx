import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-800 to-blue-900 px-20">
        {/*<!-- 頁首導航欄 -->*/}
        <header className="sticky top-5 z-20 flex w-full justify-between">
          <div className="flex">
            <div className="mr-2 h-10 w-10 rounded-full bg-gray-800 text-center font-light leading-10 text-white">
              123
            </div>
            <div className="leading-10">Taipei Volleyball Map</div>
          </div>
          <nav>
            <div className="flex w-180 justify-between">
              <ul className="flex w-160 justify-around space-x-5 rounded-full  bg-gray-800 px-5 leading-10 text-white">
                <li>
                  <a className="font-light" href="">
                    首頁
                  </a>
                </li>
                <li>
                  <a className="font-light" href="">
                    球場地圖
                  </a>
                </li>
                <li>
                  <a className="font-light" href="">
                    揪團組隊
                  </a>
                </li>
                <li>
                  <a className="font-light" href="">
                    最新消息
                  </a>
                </li>
                <li>
                  <a className="font-light" href="">
                    線上購物
                  </a>
                </li>
              </ul>
              <div className="h-10 w-10 rounded-full bg-gray-800 text-center font-light leading-10 text-white">
                會員
              </div>
            </div>
          </nav>
        </header>
        {/* 主視覺 */}
        <section className="h-page">
          <div className=" h-40"></div>
          <div className="relative flex h-160 justify-around">
            <div className="absolute bottom-14 left-0 z-10">
              <h1 className="ml-10 text-title font-black italic">
                {/* 須確認是否可以用h1包兩個div來分開樣式 */}
                <div className="text-transparent  [-webkit-text-stroke:2px_white] ">
                  Taipei
                </div>
                <div className="text-white [text-shadow:-5px_5px_#74D3E5]">
                  Volleyball Map
                </div>
              </h1>
              <p className="ml-10 text-subtitle font-medium text-cyan-500">
                台北排球地圖-讓排球成為簡單的事
              </p>
            </div>
            <figure className="absolute bottom-14 right-44">
              <img src="../pic/index_volleyball.png" alt="主視覺3D排球" />
            </figure>
          </div>
        </section>
      </div>

      {/*<!-- 主要內容 -->*/}
      <main>
        {/* 首頁-地圖 */}
        <section className="h-page rounded-lg bg-gray-200">
          <h2>map</h2>
          <div className=""></div>
        </section>
        {/* 首頁-隊伍 */}
        <section className="flex h-page bg-[url('../pic/team_bg.svg')] ">
          <h2 className="h-page w-64 text-bacc font-bold text-white [text-orientation:sideways] [text-shadow:5px_-5px_#74D3E5] [writing-mode:vertical-lr]">
            Teams
          </h2>
          <div className=""></div>
        </section>
        {/* 首頁-最新消息*/}
        <section className="flex h-page flex-row-reverse bg-gray-200 bg-gradient-to-b from-[#01C7FC] via-[#00A0EA] via-[#0179DC] to-[#175BCB]">
          <div className=""></div>
          <h2 className="h-page w-64 text-bacc font-bold text-white [text-orientation:sideways] [text-shadow:5px_-5px_#74D3E5] [writing-mode:vertical-lr]">
            News
          </h2>
        </section>
      </main>
      {/*<!-- 頁腳 -->*/}
      <footer></footer>
    </>
  );
}

export default App;
