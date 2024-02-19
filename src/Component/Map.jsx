import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courtCard.css";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination, Keyboard } from "swiper/modules";

import CourtService from "../../services/court-service";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";

const Map = () => {
  // window.scrollTo(0, 0);
  const mapContainerRef = useRef(null);

  //處理對應地區按鍵
  const handleScrollToRegion = (region) => {
    let scrollLeftPosition;
    let scrollTopPosition;
    switch (region) {
      case "中正區":
        scrollLeftPosition = 970;
        scrollTopPosition = 1950;
        break;
      case "中山區":
        scrollLeftPosition = 1355;
        scrollTopPosition = 1500;
        break;
      case "大同區":
        scrollLeftPosition = 900;
        scrollTopPosition = 1350;
        break;
      case "大安區":
        scrollLeftPosition = 1580;
        scrollTopPosition = 2200;
        break;
      case "松山區":
        scrollLeftPosition = 1855;
        scrollTopPosition = 1540;
        break;
      case "信義區":
        scrollLeftPosition = 2100;
        scrollTopPosition = 2080;
        break;
      case "北投區":
        scrollLeftPosition = 1000;
        scrollTopPosition = 80;
        break;
      case "士林區":
        scrollLeftPosition = 1185;
        scrollTopPosition = 610;
        break;
      case "內湖區":
        scrollLeftPosition = 2410;
        scrollTopPosition = 960;
        break;
      case "南港區":
        scrollLeftPosition = 3830;
        scrollTopPosition = 1633;
        break;
      case "萬華區":
        scrollLeftPosition = 670;
        scrollTopPosition = 2170;
        break;
      case "文山區":
        scrollLeftPosition = 2030;
        scrollTopPosition = 3280;
        break;
    }

    mapContainerRef.current.scrollTo({
      left: scrollLeftPosition,
      top: scrollTopPosition,
      behavior: "smooth",
    });
  };

  //監聽滾動數值並console
  let scrollTimer = null;
  const handleScroll = () => {
    //清除計時器
    clearTimeout(scrollTimer);
    //延遲兩秒顯示目前scroll位置
    scrollTimer = setTimeout(() => {
      //獲取容器寬高
      const containerWidth = mapContainerRef.current.offsetWidth;
      const containerHeight = mapContainerRef.current.offsetHeight;
      //獲取座標值
      const scrollTop = mapContainerRef.current.scrollTop;
      const scrollLeft = mapContainerRef.current.scrollLeft;
      console.log("scrollTop:", scrollTop + containerHeight / 2);
      console.log("scrollLeft:", scrollLeft + containerWidth / 2);
    }, 2000);
  };

  const navigate = useNavigate();
  const [courtData, setCourtData] = useState(null);
  //處理詳細資訊按鈕
  const handleToCourtInfo = () => {
    navigate("/court");
  };

  //向伺服器請求所有球場資料
  useEffect(() => {
    CourtService.getAllCourts()
      .then((data) => {
        // console.log(data.data);

        setCourtData(data.data);
        // console.log(data.data[0].courtName);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="relative flex h-full w-full justify-center ">
      {/* 行政區快速跳轉 */}
      <div className="absolute top-0 z-10 flex w-full justify-center py-2 text-base">
        <div className="no-scrollbar flex w-[95%] items-start gap-4 overflow-scroll pl-[6vw]">
          <button
            onClick={() => handleScrollToRegion("中正區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            中正區
          </button>
          <button
            onClick={() => handleScrollToRegion("中山區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            中山區
          </button>
          <button
            onClick={() => handleScrollToRegion("大同區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            大同區
          </button>
          <button
            onClick={() => handleScrollToRegion("大安區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            大安區
          </button>
          <button
            onClick={() => handleScrollToRegion("松山區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            松山區
          </button>
          <button
            onClick={() => handleScrollToRegion("信義區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            信義區
          </button>
          <button
            onClick={() => handleScrollToRegion("北投區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            北投區
          </button>
          <button
            onClick={() => handleScrollToRegion("士林區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            士林區
          </button>
          <button
            onClick={() => handleScrollToRegion("內湖區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            內湖區
          </button>
          <button
            onClick={() => handleScrollToRegion("南港區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            南港區
          </button>
          <button
            onClick={() => handleScrollToRegion("萬華區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            萬華區
          </button>
          <button
            onClick={() => handleScrollToRegion("文山區")}
            className="shrink-0 rounded-full border border-transparent bg-black/50 px-5 py-2 text-sm tracking-[0.2rem] text-white/70 duration-500 hover:border-white/50 hover:bg-[#062340] hover:text-white"
          >
            文山區
          </button>
        </div>
      </div>
      {/* 地圖 */}
      <div
        ref={mapContainerRef}
        onScroll={handleScroll}
        className="
                no-scrollbar h-full overflow-scroll rounded-3xl"
      >
        <div className="relative flex h-[4200px] w-[4200px]">
          <img className="h-full w-full" src="../pic/map.jpg" alt="" />

          {/* 臺北教育大學 */}
          <div className="absolute bottom-[1455px] left-[2243px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺北教育大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.8</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_true.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 國立臺灣大學綜合體育館 */}
          <div className="absolute bottom-[1400px] left-[2045px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorB/indoorB1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorB/indoorB2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorB/indoorB3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺灣大學綜合體育館
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.8</span>
                  </div>
                </div>
                <p className="text-white/70">室內場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_true.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 師大附中 */}
          <div className="absolute bottom-[1750px] left-[2137px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">師大附中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.6</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 臺灣科技大學 */}
          <div className="absolute bottom-[1270px] left-[2245px] flex w-12 flex-col-reverse items-center gap-1 ">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺灣科技大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.8</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_false.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 臺北醫學大學 */}
          <div className="absolute bottom-[1490px] left-[2607px] flex w-12 flex-col-reverse items-center gap-1 ">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺北醫學大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.3</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_false.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 臺灣師範大學體育館 */}
          <div className="absolute bottom-[1455px] left-[1845px] flex w-12 flex-col-reverse items-center gap-1 ">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorC/indoorC1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorC/indoorC2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/indoorC/indoorC3.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺灣師範大學體育館
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">5</span>
                  </div>
                </div>
                <p className="text-white/70">室內場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_true.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 台北商業大學 */}
          <div className="absolute bottom-[1930px] left-[1795px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    台北商業大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.5</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_true.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 臺北科技大學(東校區運動園區) */}
          <div className="absolute bottom-[1950px] left-[2070px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorB/outdoorB4.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺北科技大學
                    <br />
                    (東校區運動園區)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.6</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_true.svg"></img>
                    <img src="./pic/courtCard/bus_true.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 長安國中 */}
          <div className="absolute bottom-[2130px] left-[1930px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">長安國中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 臺北體育館 */}
          <div className="absolute bottom-[2130px] left-[2440px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    臺北體育館
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 興雅國中 */}
          <div className="absolute bottom-[1730px] left-[2830px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">興雅國中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 松山工農 */}
          <div className="absolute bottom-[1830px] left-[2810px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">松山工農</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 中國科技大學 */}
          <div className="absolute bottom-[800px] left-[2470px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    中國科技大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 大同高中 */}
          <div className="absolute bottom-[2282px] left-[2012px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">大同高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 東吳大學(城中) */}
          <div className="absolute bottom-[1810px] left-[1435px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    東吳大學(城中)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 世新大學 */}
          <div className="absolute bottom-[595px] left-[2260px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">世新大學</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 民權國中 */}
          <div className="absolute bottom-[2490px] left-[1555px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">民權國中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 政治大學 */}
          <div className="absolute bottom-[560px] left-[3010px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">政治大學</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 政大附中 */}
          <div className="absolute bottom-[555px] left-[3135px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">政大附中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室內場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 明倫高中 */}
          <div className="absolute bottom-[2760px] left-[1630px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_red.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">明倫高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 實踐大學(臺北校區) */}
          <div className="absolute bottom-[3000px] left-[2238px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    實踐大學(臺北校區)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室內場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 內湖高工 */}
          <div className="absolute bottom-[2820px] left-[2900px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">內湖高工</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 銘傳大學 */}
          <div className="absolute bottom-[3030px] left-[1855px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">銘傳大學</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 百齡高中 */}
          <div className="absolute bottom-[3065px] left-[1750px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">百齡高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 內湖高中 */}
          <div className="absolute bottom-[2810px] left-[3180px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">內湖高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 德明財經科技大學 */}
          <div className="absolute bottom-[3080px] left-[2693px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    德明財經科技大學
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 內湖國中 */}
          <div className="absolute bottom-[2760px] left-[3220px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">內湖國中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 南港高工 */}
          <div className="absolute bottom-[2270px] left-[3660px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">南港高工</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 東吳大學(外雙溪) */}
          <div className="absolute bottom-[3280px] left-[2240px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    東吳大學(外雙溪)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 中正高中 */}
          <div className="absolute bottom-[3470px] left-[1580px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">中正高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 陽明交通大學(陽明校區) */}
          <div className="absolute bottom-[3935px] left-[1508px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_orange.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    陽明交通大學(陽明校區)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 美堤河濱公園 */}
          <div className="absolute bottom-[2835px] left-[2450px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    美堤河濱公園
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 美堤河濱公園 */}
          <div className="absolute bottom-[1350px] left-[1450px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    綠寶石排球場
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 華江高中 */}
          <div className="absolute bottom-[1575px] left-[1145px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_green.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">華江高中</h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 台灣大學(戶外排球場) */}
          <div className="absolute bottom-[1310px] left-[2110px] flex w-12 flex-col-reverse items-center gap-1">
            <button className="peer h-12 w-12 ">
              <img className="" src="/pic/icon/ball_red.svg" alt="" />
            </button>
            {/* 卡片 */}
            <div className="invisible z-10 flex h-0 w-28 flex-col overflow-hidden rounded-2xl border-2 border-white/30 bg-[#062340] opacity-0 delay-200 duration-300 hover:visible hover:h-80 hover:w-72 hover:opacity-100 peer-hover:visible peer-hover:h-80 peer-hover:w-72 peer-hover:opacity-100 peer-hover:duration-500">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                speed={1000}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[FreeMode, Navigation, Pagination, Keyboard]}
                className="mySwiper h-1/2 w-full"
              >
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
                </SwiperSlide>
              </Swiper>
              <div className="flex h-1/2 w-full flex-col justify-between p-4">
                <div className="flex w-full justify-between text-white">
                  <h3 className="text-xl font-bold tracking-wider">
                    台灣大學(戶外排球場)
                  </h3>
                  <div className="flex items-center gap-1">
                    <img
                      className="h-4 w-4"
                      src="/pic/courtCard/star.svg"
                      alt=""
                    />
                    <span className="font-bold leading-[28px]">4.2</span>
                  </div>
                </div>
                <p className="text-white/70">室外場</p>
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-2">
                    <img src="./pic/courtCard/parking_false.svg"></img>
                    <img src="./pic/courtCard/bus_false.svg"></img>
                    <img src="./pic/courtCard/mrt_true.svg"></img>
                  </figure>
                  {/* 按鈕 */}
                  <button
                    onClick={handleToCourtInfo}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] duration-500 hover:bg-[#0492D9]"
                  >
                    詳細資訊
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
