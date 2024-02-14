import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courtCard.css";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination, Keyboard } from "swiper/modules";
import { useState, useEffect } from "react";
import CourtService from "../../services/court-service";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import "../css/swiper.css";

const CourtCard = () => {
  const navigate = useNavigate();
  const [courtData, setCourtData] = useState(null);
  //處理詳細資訊按鈕
  const handleToCourtInfo = () => {
    navigate("/court");
  };

  //獲得local-storage使用者身份資料
  const user = AuthService.getCurrentUser();
  let userRole;
  if (user) {
    userRole = user.user.role;
  }

  //處理新增球場按鈕
  const linkToAddCourt = () => {
    navigate("/AddCourt");
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
  //

  return (
    <div className="grid grid-cols-3 items-center justify-items-center gap-x-[5vw] gap-y-14">
      {courtData &&
        courtData.length != 0 &&
        courtData.map((court) => {
          return (
            <div
              key={court._id}
              className="courtCard w-full overflow-hidden rounded-2xl border-2 border-transparent bg-[#062340] duration-500 hover:border-white/30 hover:bg-[#083159]"
            >
              {/* 輪播圖 */}
              <figure className="w-full">
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
                  className="mySwiper h-full w-full"
                >
                  <SwiperSlide>
                    <img src={court.imgPath[0]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={court.imgPath[1]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={court.imgPath[2]} alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={court.imgPath[3]} alt="" />
                  </SwiperSlide>
                </Swiper>
              </figure>
              {/* 內容 */}
              <button
                onClick={handleToCourtInfo}
                className="flex h-full w-full flex-col gap-2 px-6 py-4"
              >
                {/* 標題欄 */}
                <div className="flex w-full flex-col flex-wrap items-start gap-2 border-b border-white/40 pb-2">
                  <div className="flex w-full flex-wrap justify-between">
                    <h3 className="text-left text-2xl tracking-wider text-[#FFCC66]">
                      {court.courtName}
                    </h3>
                    <div className="flex items-center gap-x-2">
                      <img
                        className="h-6 w-6"
                        src="../../pic/courtCard/star.svg"
                        alt=""
                      />
                      <span className="text-2xl leading-[28px] text-white">
                        {court.score}
                      </span>
                    </div>
                  </div>
                  {/* 球場類型 */}
                  <p className="text-[#FFFFFF]/70">
                    球場類型：{court.courtType}
                  </p>
                </div>
                {/* 下方資訊 */}
                <div className="flex w-full flex-wrap justify-between gap-4 text-white">
                  {/* icon */}
                  <figure className="flex gap-x-2">
                    <span>{court.traffic}</span>
                    {court.isPark ? (
                      <img src="./pic/courtCard/parking_true.svg"></img>
                    ) : (
                      <img src="./pic/courtCard/parking_false.svg"></img>
                    )}
                    {court.isBus ? (
                      <img src="./pic/courtCard/bus_true.svg"></img>
                    ) : (
                      <img src="./pic/courtCard/bus_false.svg"></img>
                    )}
                    {court.isMRT ? (
                      <img src="./pic/courtCard/mrt_true.svg"></img>
                    ) : (
                      <img src="./pic/courtCard/mrt_false.svg"></img>
                    )}
                  </figure>
                  {/* 按鈕 */}
                  <button className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[14px] hover:bg-[#0492D9]">
                    開啟地圖
                  </button>
                </div>
              </button>
            </div>
          );
        })}
      {user && userRole == "admin" && (
        <button
          onClick={linkToAddCourt}
          className="h-72 w-64 rounded-2xl border-2 border-white/10 bg-white/5 text-xl tracking-widest text-white/50 duration-500 hover:border-white/20 hover:bg-white/10 "
        >
          管理球場
        </button>
      )}
    </div>
  );
};

export default CourtCard;
