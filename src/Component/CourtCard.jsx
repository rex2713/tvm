import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courtCard.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const CourtCard = () => {
  return (
    <div className="courtCard w-full overflow-hidden rounded-2xl bg-[#123659]">
      <figure>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="../../pic/courtCard/figure-1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../pic/courtCard/figure-2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../pic/courtCard/figure-3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../../pic/courtCard/figure-4.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </figure>
      <div className="flex flex-col gap-y-4 px-6 py-4">
        <div className="flex justify-between">
          <h3 className="text-xl text-[#FFCC66]">綠寶石公園</h3>
          <div className="flex gap-x-2">
            <img src="../../pic/courtCard/star.svg" alt="" />
            <span className="leading-[28px] text-white">4.8</span>
          </div>
        </div>
        <hr className="border-[#0492D9]" />
        <p className="text-[#FFFFFF]/70">
          <span>球場數：</span>
          <span>4座室外露天場</span>
        </p>
        <figure className="flex gap-x-2">
          <img src="../../pic/courtCard/parking.svg" alt="" />
          <img src="../../pic/courtCard/bus.svg" alt="" />
          <img src="../../pic/courtCard/mrt.svg" alt="" />
        </figure>
        <div className="flex justify-between text-white">
          <button className="rounded-3xl border-2 border-[#FFF]/50 bg-[#0492D9] px-6 py-2 text-[14px] hover:bg-[#009EED]">
            詳細資訊
          </button>
          <button className="rounded-3xl border-2 border-[#FFF]/50 bg-[#0492D9] px-6 py-2 text-[14px] hover:bg-[#009EED]">
            前往球場
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourtCard;
