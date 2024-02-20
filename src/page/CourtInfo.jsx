import React from "react";
import { Rating } from "@material-tailwind/react";

import { useRef, useState, useEffect } from "react";
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

const CourtInfo = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="flex flex-col items-center justify-between gap-2 bg-gradient-to-b from-[#082A4D] to-[#000000] pt-28">
      <figure className="flex xl:h-[50vh] lg:h-[45vh] md:h-[40vh] h-[30vh] w-full flex-col gap-2">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          keyboard={true}
          speed={1300}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: -80,
            depth: 10,
            modifier: 0.5,
            slideShadows: true,
          }}
          modules={[
            FreeMode,
            Navigation,
            Pagination,
            Keyboard,
            EffectCoverflow,
          ]}
          className="mySwiper flex h-full justify-center rounded-2xl"
        >
          <SwiperSlide className="h-full w-1/2 rounded-3xl ">
            <img
              className="rounded-3xl"
              src="./pic/courtCard/outdoorA/outdoorA1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-1/2 rounded-3xl ">
            <img
              className="rounded-3xl"
              src="./pic/courtCard/outdoorA/outdoorA2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-1/2 rounded-3xl ">
            <img
              className="rounded-3xl"
              src="./pic/courtCard/outdoorA/outdoorA3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="h-full w-1/2 rounded-3xl ">
            <img
              className="rounded-3xl"
              src="./pic/courtCard/outdoorA/outdoorA4.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </figure>

      {/* 球場內容 */}
      <div className="flex w-[80vw] flex-col items-center justify-center lg:gap-20 gap-14 rounded-t-3xl bg-[#082A4D] lg:px-[4vw] px-[2vw] py-5">
        <section className="flex w-full px-10 lg:flex-row flex-col justify-between items-center">
          {/* 資訊文字 */}
          <article className="xl:w-1/2 lg:w-7/12 w-full flex flex-col lg:items-start items-center">
            {/* 球場標題 */}
            <div className="lg:my-8 my-4 flex items-center gap-6">
              <img
                className="lg:h-12 md:h-10 h-8 w-12"
                src="../../pic/icon/ball_green.svg"
                alt=""
              />
              <h2 className="text-4xl font-black tracking-[.15rem] text-white">
                綠寶石公園
              </h2>
              <div className="flex items-center gap-2">
                <img className="h-6 w-6" src="../../pic/icon/star.svg" alt="" />
                <p className="text-2xl font-black tracking-[.15rem] text-white">
                  4.8
                </p>
              </div>
            </div>
            {/* 詳細資訊 */}
            <div className="flex flex-col items-start">
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">開放時間</p>
              <p>24小時</p>
            </div>
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">球場數</p>
              <p>4座 (男網2座/女網2座)</p>
            </div>
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">地址</p>
              <p>234新北市永和區環河西路二段</p>
            </div>
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">交通</p>
              <p>捷運頂溪站</p>
            </div>
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">停車場</p>
              <p>綠寶石區汽機車停車場</p>
            </div>
            <div className="my-2 flex tracking-wider text-white/70 xl:text-xl md:text-lg text-base">
              <p className="w-[6.5rem] font-bold">費用</p>
              <p>免費</p>
            </div>
            </div>
          </article>
          {/* Google地圖 */}
          <div className="flex items-center lg:mt-8 mt-4 xl:w-1/2 lg:w-5/12 w-3/4 py-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4688.712712909191!2d121.50749111670898!3d25.017380504548534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9c0a858831b%3A0x4bc743b409278152!2z57ag5a-255-z5o6S55CD5aC0!5e0!3m2!1szh-TW!2stw!4v1708307906466!5m2!1szh-TW!2stw"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:h-80 h-72 w-full rounded-xl border border-transparent bg-clip-border"
            ></iframe>
          </div>
        </section>
        {/* 加入隊伍 */}
        <section className="flex w-full flex-col items-center justify-center gap-5 px-10">
          <h3 className="text-2xl font-bold text-[#FFCC66]">加入隊伍</h3>
          <div className="no-scrollbar flex w-full justify-start gap-[1.5vw] overflow-x-auto">
            {/* 隊伍 */}
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="flex lg:w-60 w-44 shrink-0 flex-col items-center justify-center lg:gap-4 gap-2 lg:py-6 py-4 rounded-xl border group border-transparent bg-black/20 px-4 duration-500 hover:border-white/30 hover:bg-black/30">
              <h4 className="w-full text-center lg:text-xl text-base font-black tracking-widest text-white/80 group-hover:text-white duration-500">
                Team-Apple
              </h4>
              <h5 className="lg:text-lg text-base w-full text-center font-black tracking-widest text-[#FFE8A3]/80 duration-500 group-hover:text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              {/* <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p> */}
              <p className="w-3/5 rounded-full lg:text-base text-xs my-1 border border-transparent bg-[#0492D9]/80 duration-500 group-hover:bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
          </div>
        </section>
        {/* 場地評論 */}
        <section className="flex w-full flex-col items-center justify-center gap-5 px-10">
          <h3 className="text-2xl font-bold text-[#FFCC66]">場地評價</h3>
          {/* 撰寫評論 */}
          <div className="flex w-full items-center lg:gap-10 gap-6 rounded-xl bg-[#011E37] lg:px-12 px-6 py-5 tracking-widest text-white/50">
            <img
              className="lg:h-14 h-10 lg:w-14 w-10 shrink-0 rounded-full bg-white bg-clip-border object-cover"
              src="../../pic/icon/member/no login.png"
              alt=""
            />
            <form action="" className="flex w-full items-center gap-6">
              <div className="flex w-full flex-col gap-4">
                {/* 星星評分 */}
                <div className="flex md:flex-row flex-col md:items-center md:gap-2 gap-1">
                  <p className="md:text-base text-sm">場地評分</p>
                  <Rating value={3} className="flex text-[#FFCC66]/80" />
                </div>
                <textarea
                  className="sm:h-20 h-36 w-full rounded-xl bg-white/20 px-4 py-2 text-white/80 focus:bg-white/90 focus:text-black/90"
                  name=""
                  id=""
                  placeholder="撰寫評論"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex lg:h-10 h-8 lg:w-10 w-8 rounded-full items-center justify-center bg-white/20 hover:bg-[#0492D9] "
              >
                <div className="flex lg:h-10 h-8 lg:w-10 w-8 items-center justify-center opacity-20 hover:opacity-100">
                  <img
                    className="lg:h-6 h-4 lg:w-6 w-4"
                    src="../../pic/icon/send.svg"
                    alt=""
                  />
                </div>
              </button>
            </form>
          </div>
          {/* 其他評論 */}
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between lg:gap-10 gap-6 rounded-xl bg-[#011E37] lg:px-12 px-6 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="lg:h-14 h-10 lg:w-14 w-10 shrink-0 rounded-full bg-white bg-clip-border object-cover"
                  src="../../pic/icon/member/girl1.png"
                  alt=""
                />
                <p className="w-full lg:text-base text-sm">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-end lg:gap-2 gap-1">
                <img className="lg:h-6 h-4 lg:w-6 w-4" src="../../pic/icon/star.svg" alt="" />
                <p className="lg:text-xl text-lg font-bold">4</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between lg:gap-10 gap-6 rounded-xl bg-[#011E37] lg:px-12 px-6 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="lg:h-14 h-10 lg:w-14 w-10 shrink-0 rounded-full bg-white bg-clip-border object-cover"
                  src="../../pic/icon/member/men5.png"
                  alt=""
                />
                <p className="w-full lg:text-base text-sm">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-end lg:gap-2 gap-1">
                <img className="lg:h-6 h-4 lg:w-6 w-4" src="../../pic/icon/star.svg" alt="" />
                <p className="lg:text-xl text-lg font-bold">5</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between lg:gap-10 gap-6 rounded-xl bg-[#011E37] lg:px-12 px-6 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="lg:h-14 h-10 lg:w-14 w-10 shrink-0 rounded-full bg-white bg-clip-border object-cover"
                  src="../../pic/icon/member/girl2.png"
                  alt=""
                />
                <p className="w-full lg:text-base text-sm">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-end lg:gap-2 gap-1">
                <img className="lg:h-6 h-4 lg:w-6 w-4" src="../../pic/icon/star.svg" alt="" />
                <p className="lg:text-xl text-lg font-bold">4</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <button className="flex h-10 w-10 items-center justify-center rounded-full duration-500 hover:bg-white/10">
              <img
                className="opacity-50"
                src="../../pic/icon/backward.svg"
                alt=""
              />
            </button>
            <a
              className="flex lg:h-10 h-8 lg:w-14 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 duration-500 hover:bg-white/10 hover:text-white/80"
              href=""
            >
              1
            </a>
            <a
              className="flex lg:h-10 h-8 lg:w-14 w-10 items-center justify-center rounded-full duration-500 hover:bg-white/10 hover:text-white/80"
              href=""
            >
              2
            </a>
            <button className="flex h-10 w-10 items-center justify-center rounded-full duration-500 hover:bg-white/10">
              <img
                className="opacity-50"
                src="../../pic/icon/forward.svg"
                alt=""
              />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CourtInfo;
