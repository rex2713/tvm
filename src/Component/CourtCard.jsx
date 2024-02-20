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
    <div className="grid grid-cols-2 items-center justify-items-center gap-[2vw] lg:gap-y-10 md:gap-y-8 gap-y-6 md:grid-cols-3">
      {user && userRole == "admin" && (
        <button
          onClick={linkToAddCourt}
          className="h-72 w-64 rounded-2xl border-2 border-white/10 bg-white/5 text-xl tracking-widest text-white/50 duration-500 hover:border-white/20 hover:bg-white/10 "
        >
          管理球場
        </button>
      )}
      {courtData &&
        courtData.length != 0 &&
        courtData.map((court) => {
          return (
            <div
              key={court._id}
              className="courtCard flex xl:h-[480px] lg:h-[450px] md:h-[420px] h-[360px] w-full flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-[#062340] duration-500 hover:border-white/50 hover:bg-[#083159]"
            >
              {/* 輪播圖 */}
              <figure className="h-3/5 w-full">
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
              <a
                onClick={handleToCourtInfo}
                className="group flex h-2/5 w-full cursor-pointer flex-col justify-between gap-2 px-6 md:py-4 py-2"
              >
                {/* 標題欄 */}
                <div className="flex w-full flex-col flex-wrap items-start gap-2">
                  <div className="flex w-full justify-between items-start gap-2">
                    <h3 className="text-wrap text-left text-base tracking-wider text-[#FFCC66] md:text-lg lg:text-xl xl:text-2xl">
                      {court.courtName}
                    </h3>
                    <div className="flex w-1/6 shrink-0 items-center justify-end lg:gap-2 gap-1">
                      <img
                        className="xl:h-6 lg:h-5 h-4"
                        src="../../pic/courtCard/star.svg"
                        alt=""
                      />
                      <span className="text-base leading-[0px] text-white md:text-lg lg:text-xl xl:text-2xl">
                        {court.score}
                      </span>
                    </div>
                  </div>
                  {/* 球場類型 */}
                  <p className="text-[#FFFFFF]/70">{court.courtType}</p>
                </div>
                {/* 下方資訊 */}
                <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 lg:pt-4 pt-2 text-white">
                  {/* icon */}
                  <figure className="flex gap-x-2">
                    <span>{court.traffic}</span>
                    {court.isPark ? (
                      <img src="./pic/courtCard/parking_true.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    ) : (
                      <img src="./pic/courtCard/parking_false.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    )}
                    {court.isBus ? (
                      <img src="./pic/courtCard/bus_true.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    ) : (
                      <img src="./pic/courtCard/bus_false.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    )}
                    {court.isMRT ? (
                      <img src="./pic/courtCard/mrt_true.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    ) : (
                      <img src="./pic/courtCard/mrt_false.svg" className="xl:w-6 lg:w-5 w-4"></img>
                    )}
                  </figure>
                  {/* 按鈕 */}
                  <button className="rounded-full border border-white/30 bg-white/10 lg:px-4 px-2 py-1 lg:text-sm text-xs tracking-wider duration-500 group-hover:bg-[#0492D9]">
                    詳細資訊
                  </button>
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default CourtCard;
