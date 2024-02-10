import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courtCard.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import CourtService from "../../services/court-service";

const AddCourt = () => {
  const navigate = useNavigate();
  //判別是否為管理員身份，如果不是則自動導向回首頁
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user.user.role);
    if (user) {
      if (user.user.role !== "admin") {
        window.alert("您不是管理員，沒有此頁面權限，即將為您跳轉首頁");
        navigate("/");
      }
    } else if (!user) {
      window.alert("您不是管理員，沒有此頁面權限，即將為您跳轉首頁");
      navigate("/");
    }
  }, []);

  const [courtData, setCourtData] = useState(null);
  useEffect(() => {
    CourtService.getAllCourts().then((data) => {
      // console.log(data.data);
      setCourtData(data.data);
    });
  }, []);
  //處理頁面input
  const [courtName, setCourtName] = useState("");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("17:00");
  const [openingHours, setOpeningHours] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtAddress, setCourtAddress] = useState("");
  const [isPark, setIsPark] = useState(false);
  const [isBus, setIsBus] = useState(false);
  const [isMRT, setIsMRT] = useState(false);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState(null);

  //上半部球場卡片相關
  const handleDelete = (e) => {
    if (window.confirm("確定要刪除嗎？")) {
      // console.log(e.target.id);
      const _id = e.target.id;
      CourtService.deleteCourt(_id)
        .then(() => {
          window.alert("刪除球場成功");
          // window.location.reload();
          // window.scroll(0, 0);
        })
        .catch((error) => {
          console.log(error);
          q;
        });
    }
  };

  //下半部表單相關
  const handleOpeningHours = () => {
    const openingHours = "營業時間：" + startTime + "~" + endTime;
    setOpeningHours(openingHours);
  };

  const handleCourtName = (e) => {
    setCourtName(e.target.value);
  };
  const handleStartTime = (e) => {
    handleOpeningHours();
    setStartTime(e.target.value);
  };
  const handleEndTime = (e) => {
    handleOpeningHours();
    setEndTime(e.target.value);
  };
  const handleCourtType = (e) => {
    handleOpeningHours();
    setCourtType(e.target.value);
  };
  const handleCourtAddress = (e) => {
    setCourtAddress(e.target.value);
  };
  const handleIsPark = (e) => {
    setIsPark(e.target.checked);
  };
  const handleIsBus = (e) => {
    setIsBus(e.target.checked);
    console.log(isBus);
  };
  const handleIsMRT = (e) => {
    setIsMRT(e.target.checked);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  //設定input更新file
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFile(filesArray);
  };
  //設定上傳圖片預覽畫面
  const handleCoverPreview = (e) => {
    if (!e.target.files[0] || e.target.files[0].length == 0) return;
    const previewImg = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const name = file.name;
      const previewURL = URL.createObjectURL(file);
      previewImg.push({ name, previewURL });
    }
    setPreview(previewImg);
  };
  //設定上傳照片按鈕(一次四張)
  const handleUpload = (e) => {
    // console.log(file);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    // console.log(formData);
    CourtService.uploadImg(formData)
      .then(() => {
        console.log("success");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //處理提交球場資料函式
  const postCourt = () => {
    handleOpeningHours();
    CourtService.postAddCourt(
      courtName,
      openingHours,
      courtType,
      courtAddress,
      isPark,
      isBus,
      isMRT,
      price,
    )
      .then(() => {
        window.alert("創建球場成功");
        window.location.reload();
        window.scroll(0, 0);
      })
      .catch((error) => {
        setMessage(error.response.data);
        // console.log(error.response.data);
      });
  };

  return (
    <div className="bg-blue-400 pt-28">
      <div className="grid grid-cols-4 gap-x-10 gap-y-14 px-20">
        {courtData &&
          courtData.length != 0 &&
          courtData.map((court) => {
            return (
              <div
                key={court._id}
                className="courtCard w-full overflow-hidden rounded-2xl bg-[#123659]"
              >
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
                    <h3 className="text-xl text-[#FFCC66]">
                      {court.courtName}
                    </h3>
                    <div className="flex gap-x-2">
                      <img src="../../pic/courtCard/star.svg" alt="" />
                      <span className="leading-[28px] text-white">
                        {court.score}
                      </span>
                    </div>
                  </div>
                  <hr className="border-[#0492D9]" />
                  <p className="text-[#FFFFFF]/70">
                    <span>球場數：</span>
                    <span>{court.courtType}</span>
                  </p>
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
                    <img src="../../pic/courtCard/parking.svg" alt="" />
                    <img src="../../pic/courtCard/bus.svg" alt="" />
                    <img src="../../pic/courtCard/mrt.svg" alt="" />
                  </figure>
                  <div className="flex justify-between text-white">
                    <button
                      // onClick={handleToCourtInfo}
                      className="rounded-3xl border-2 border-[#FFF]/50 bg-[#0492D9] px-6 py-2 text-[14px] hover:bg-[#009EED]"
                    >
                      修改資訊
                    </button>
                    <button
                      onClick={handleDelete}
                      className="rounded-3xl border-2 border-[#FFF]/50 bg-[#d93904] px-6 py-2 text-[14px] hover:bg-[#d95604]"
                      id={court._id}
                    >
                      刪除球場
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col gap-y-2 px-[500px] py-20">
        <h2 className="text-3xl">新增球場</h2>
        <label htmlFor="courtName">球場名稱</label>
        <input onChange={handleCourtName} id="courtName" type="text" />
        <div>
          <label htmlFor="startTime">開始時間</label>
          <input
            onChange={handleStartTime}
            id="startTime"
            type="time"
            defaultValue="08:00"
          />
          <label htmlFor="endTime">結束時間</label>
          <input
            onChange={handleEndTime}
            id="endTime"
            type="time"
            defaultValue="17:00"
          />
        </div>
        <label htmlFor="courtType">球場類型</label>
        <div className="flex gap-x-2">
          <label>
            <input
              onChange={handleCourtType}
              name="courtType"
              type="radio"
              value="室內場"
            />
            室內
          </label>
          <label>
            <input
              onChange={handleCourtType}
              name="courtType"
              type="radio"
              value="室外場"
            />
            室外
          </label>
        </div>
        <label htmlFor="courtAddress">球場地址</label>
        <input onChange={handleCourtAddress} id="courtAddress" type="text" />
        <div className="flex justify-between">
          <div>
            <label htmlFor="isPark">可停車</label>
            <input onChange={handleIsPark} id="isPark" type="checkbox" />
          </div>
          <div>
            <label htmlFor="isBus">有公車</label>
            <input onChange={handleIsBus} id="isBus" type="checkbox" />
          </div>
          <div>
            <label htmlFor="isMRT">有捷運</label>
            <input onChange={handleIsMRT} id="isMRT" type="checkbox" />
          </div>
        </div>
        <label htmlFor="price">場地費用</label>
        <input onChange={handlePrice} id="price" type="text" />
        {message && (
          <p className="my-4 bg-red-300 text-center text-red-800">{message}</p>
        )}

        <button
          className="mx-auto w-20 bg-yellow-500 text-2xl"
          onClick={() => {
            postCourt();
          }}
        >
          提交
        </button>
        <div>
          {/* 上傳複數檔案需加上multiple */}
          <input
            type="file"
            multiple
            onChange={(e) => {
              handleFileChange(e), handleCoverPreview(e);
            }}
          />
          <button onClick={handleUpload}>上傳照片</button>
        </div>
        {preview &&
          preview.map((item) => {
            return (
              <div key={item.name}>
                <p>{item.name}</p>
                <img src={item.previewURL} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddCourt;
