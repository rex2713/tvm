import React from "react";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  FreeMode,
  Pagination,
  Navigation,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";
import "../css/swiper.css";
import "swiper/css/effect-coverflow";


const TeamInfo = () => {
  return (
    <main className="flex w-full bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      {/* 球場內容 */}
      <div className="flex w-[80vw] flex-col items-center justify-center gap-20 rounded-t-3xl bg-[#082A4D] px-[2vw] py-8">
        <section className="flex h-full w-full gap-[5vw] px-10">
          {/* 資訊 */}
          <article className="flex w-1/2 flex-col justify-between gap-8">
            {/* 球場標題 */}
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-black tracking-wider text-[#FFCC66]">
                Apple Team
              </h3>
              <figure className="my-auto flex items-center">
                <img
                  className="h-8 w-8 cursor-pointer opacity-20 duration-500 hover:opacity-60"
                  src="/pic/edit.svg"
                  alt=""
                />
              </figure>
            </div>
            {/* 詳細資訊 */}
            <div className="flex flex-col gap-4">
              <div className="flex text-xl tracking-widest text-white/70">
                <p className="w-[3rem] text-base">球場</p>
                <p className="font-bold">台北商業大學</p>
              </div>
              <div className="flex text-xl tracking-wider text-white/70">
                <p className="w-[3rem] text-base">日期</p>
                <p className="font-bold">12/10(日)</p>
              </div>
            </div>
            {/* 公告欄 */}
            <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-2 font-bold text-white/70 duration-500 hover:border-white/20">
              <p className="my-2 w-full text-center text-xl tracking-widest">
                公告
              </p>
              <div className="no-scrollbar flex h-full w-full flex-col gap-1 overflow-scroll">
                <div className="flex items-start gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:23
                  </p>
                  <p className="text-base tracking-widest">大家自己帶裝備</p>
                </div>
                <div className="flex items-start gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.6 18:00
                  </p>
                  <p className="text-base tracking-widest">六點半門口見!</p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="h-6 w-5/6 rounded-lg bg-white/10 px-2 focus:bg-white/80 focus:text-black"
                />
                <input
                  type="submit"
                  className="h-6 w-1/6 rounded-lg bg-white/10 text-white/50 duration-500 hover:bg-white/20"
                  value={"送出公告"}
                />
              </div>
            </div>
          </article>

          {/* 隊員 */}
          <div className="grid h-full w-1/2 grid-cols-3 items-center justify-items-center gap-x-4 gap-y-4 text-white">
            <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                -
              </div>
              <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                <img
                  className="w-1/3 rounded-full bg-white bg-clip-border outline outline-2 outline-offset-4 outline-[#FFCC66]"
                  src="/pic/icon/member/men3.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base font-bold tracking-wide">北商學生1</p>
                  <div className="text-sm tracking-widest text-white/70">
                    <p>主攻</p>
                    <p>副攻</p>
                  </div>
                  <p className="text-sm tracking-widest text-white/70">體保</p>
                </div>
              </div>
            </button>

            <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                -
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <img
                  className="w-1/3 rounded-full bg-white bg-clip-border"
                  src="/pic/icon/member/men6.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base font-bold tracking-wide">北商學生2</p>
                  <p className="text-sm tracking-widest text-white/70">
                    主攻、攔中
                  </p>
                  <p className="text-sm tracking-widest text-white/70">體保</p>
                </div>
              </div>
            </button>

            <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                -
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <img
                  className="w-1/3 rounded-full bg-white bg-clip-border"
                  src="/pic/icon/member/girl2.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base font-bold tracking-wide">北商學生3</p>
                  <p className="text-sm tracking-widest text-white/70">
                    舉球、自由
                  </p>
                  <p className="text-sm tracking-widest text-white/70">體保</p>
                </div>
              </div>
            </button>

            <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                -
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <img
                  className="w-1/3 rounded-full bg-white bg-clip-border"
                  src="/pic/icon/member/men1.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base font-bold tracking-wide">北商學生4</p>
                  <p className="text-sm tracking-widest text-white/70">舉球</p>
                  <p className="text-sm tracking-widest text-white/70">新手</p>
                </div>
              </div>
            </button>

            <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                -
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <img
                  className="w-1/3 rounded-full bg-white bg-clip-border"
                  src="/pic/icon/member/girl4.png"
                  alt=""
                />
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className="text-base font-bold tracking-wide">北商學生5</p>
                  <p className="text-sm tracking-widest text-white/70">副攻</p>
                  <p className="text-sm tracking-widest text-white/70">校隊</p>
                </div>
              </div>
            </button>

            <label
              htmlFor="seek"
              className="group flex h-52 w-full flex-col items-center justify-center gap-2 rounded-lg border border-transparent bg-black/30 pb-6 duration-500 hover:border-white/50"
            >
              <p className="text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                +
              </p>
              <select
                name=""
                id="seek"
                className="h-8 w-2/3 shrink cursor-pointer rounded-md border border-white/20 bg-white/10 px-4 text-center text-base text-white/70 duration-300 focus:bg-white/90 focus:text-black/90 group-hover:bg-white/20"
              >
                <option value="" disabled>
                  選擇徵選對象
                </option>
                <option value="主攻">主攻</option>
                <option value="攔中">攔中</option>
                <option value="副攻">副攻</option>
                <option value="舉球">舉球</option>
                <option value="自由">自由</option>
              </select>
            </label>
          </div>
        </section>

        {/* 場地評論 */}
        <section className="flex w-full flex-col items-center justify-center gap-5 px-10">
          <h3 className="text-2xl font-bold text-[#FFCC66]">留言板</h3>
          <div className="flex h-80 w-full flex-col justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 font-bold duration-500 hover:border-white/20">
            <div className="no-scrollbar flex flex-col gap-1 overflow-scroll text-base">
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:23
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生1
                </p>
                <p className="text-base tracking-widest text-white/70">
                  幾點在球場集合?
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:36
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生2
                </p>
                <p className="text-base tracking-widest text-white/70">
                  看大家意見
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:37
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生5
                </p>
                <p className="text-base tracking-widest text-white/70">
                  我六點半才會到
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:38
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生1
                </p>
                <p className="text-base tracking-widest text-white/70">
                  那我們就約六點半門口見嗎?
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:40
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生2
                </p>
                <p className="text-base tracking-widest text-white/70">
                  沒問題
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:41
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生4
                </p>
                <p className="text-base tracking-widest text-white/70">好喔~</p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:41
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生3
                </p>
                <p className="text-base tracking-widest text-white/70">收</p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:42
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生1
                </p>
                <p className="text-base tracking-widest text-white/70">
                  球具各自帶喔
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.4 15:45
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生4
                </p>
                <p className="text-base tracking-widest text-white/70">收到</p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.9 21:30
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生2
                </p>
                <p className="text-base tracking-widest text-white/70">
                  明天有人要我幫買晚餐嗎
                </p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.9 21:30
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生1
                </p>
                <p className="text-base tracking-widest text-white/70">我要</p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.9 21:31
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生1
                </p>
                <p className="text-base tracking-widest text-white/70">隨意買個飯糰，感謝</p>
              </div>
              <div className="flex gap-4">
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  2023.12.9 21:32
                </p>
                <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                  北商學生2
                </p>
                <p className="text-base tracking-widest text-white/70">
                  收
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="h-6 w-11/12 rounded-lg bg-white/10 px-2 focus:bg-white/80 focus:text-black"
              />
              <input
                type="submit"
                className="h-6 w-1/12 rounded-lg bg-white/10 text-white/50 duration-500 hover:bg-white/20"
                value={"送出訊息"}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TeamInfo;
