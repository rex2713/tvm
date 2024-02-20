import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/courtCard.css";
import "swiper/css/free-mode";
import { FreeMode, Navigation, Pagination, Keyboard } from "swiper/modules";
import CourtService from "../../services/court-service";
import AuthService from "../../services/auth-service";
import Compressor from "compressorjs";

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
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);

  //上半部球場卡片相關
  //處理球場刪除
  const handleDelete = (e) => {
    if (window.confirm("確定要刪除嗎？")) {
      // console.log(e.target.id);
      const _id = e.target.id;
      CourtService.deleteCourt(_id)
        .then(() => {
          window.alert("刪除球場成功");
          window.location.reload();
          window.scroll(0, 0);
        })
        .catch((error) => {
          console.log(error);
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
    // console.log(e.target.checked);
    setIsPark(e.target.checked);
  };
  const handleIsBus = (e) => {
    setIsBus(e.target.checked);
  };
  const handleIsMRT = (e) => {
    setIsMRT(e.target.checked);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  //設定input更新file
  const handleFileChange = async (e) => {
    const filesArray = Array.from(e.target.files);
    // // console.log(filesArray);
    // setFile(filesArray);

    // const photoImg = [];
    // for (let i = 0; i < e.target.files.length; i++) {
    //   const file = e.target.files[i];
    //   const name = file.name;
    //   const photoURL = URL.createObjectURL(file);
    //   photoImg.push({ name, photoURL });
    // }
    console.log(filesArray);

    try {
      const compressedBlob = await Promise.all(
        filesArray.map((file) => {
          return new Promise((resolve, reject) => {
            new Compressor(file, {
              scaleRatio: 0.5, // 将图像缩放为原始大小的一半
              quality: 1, //設定質量
              maxWidth: 200, // 最大寬度
              maxHeight: 80, // 最大高度
              resize: true,
              mimeType: "image/jpeg", // Specify the output image format
              success(result) {
                resolve(result);
              },
              error(error) {
                console.log(error);
                reject(error);
              },
            });
          });
        }),
      );
      console.log(compressedBlob);
      setFile(compressedBlob);

      //處理上傳圖片預覽畫面
      if (!compressedBlob || compressedBlob.length == 0) {
        return console.log("沒找到預覽網址");
      } else {
        const previewImg = [];
        for (let i = 0; i < compressedBlob.length; i++) {
          const file = compressedBlob[i];
          const name = file.name;
          const previewURL = URL.createObjectURL(file);
          previewImg.push({ name, previewURL });
        }
        setPreview(previewImg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //處理提交球場資料函式
  const postCourt = () => {
    handleOpeningHours();
    const formData = new FormData();
    formData.append("courtName", courtName);
    formData.append("openingHours", openingHours);
    formData.append("courtType", courtType);
    formData.append("courtAddress", courtAddress);
    formData.append("isPark", isPark);
    formData.append("isBus", isBus);
    formData.append("isMRT", isMRT);
    formData.append("price", price);
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }

    CourtService.postAddCourt(formData)
      .then(() => {
        //處理永久硬碟複製
        AuthService.copyRenderDisk()
          .then(() => {
            window.alert("創建球場成功");
            window.location.reload();
          })
          .catch((e) => {
            console.error("複製RenderDisk失敗:" + e);
          });
      })
      .catch((error) => {
        setMessage(error.response.data);
        // console.log(error.response.data);
      });
  };

  return (
    <div className="flex flex-col items-center gap-10 bg-gradient-to-b from-[#082A4D] to-[#000000] pt-28">
      <div className="grid grid-cols-4 gap-10 gap-y-14 px-20">
        {courtData &&
          courtData.length != 0 &&
          courtData.map((court) => {
            return (
              <div
                key={court._id}
                className="courtCard h-[480px] w-full overflow-hidden rounded-2xl border-2 border-transparent bg-[#062340] duration-500 hover:border-white/30 hover:bg-[#083159]"
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
                <div className="flex h-2/5 w-full flex-col justify-between gap-2 px-6 py-4">
                  {/* 標題欄 */}
                  <div className="flex w-full flex-col flex-wrap items-start gap-2">
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
                  <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-4 text-white">
                    {/* icon */}
                    <figure className="flex gap-x-2">
                      <span>{court.traffic}</span>
                      {court.isPark ? (
                        <img src={"./pic/courtCard/parking_true.svg"}></img>
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
                    <div className="flex w-full justify-between">
                      <Link to={"/" + court._id + "/CourtEdit"}>修改資料</Link>
                      <button
                        onClick={handleDelete}
                        className="rounded-full border border-white/30 bg-[#AE2514] px-4 py-1 text-sm tracking-widest hover:bg-[#cc2b16]"
                        id={court._id}
                      >
                        刪除球場
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* 新增球場 */}
      <div className="flex w-[90vw] flex-col items-center justify-center gap-10 rounded-t-3xl bg-[#082A4D] px-20 py-5 text-white">
        <h2 className="text-3xl">新增球場</h2>
        {/* 左欄 */}
        <div className="flex w-full justify-center gap-20">
          <div className="flex w-1/2 flex-col justify-start gap-6">
            <div className="flex w-full">
              <label
                htmlFor="courtName"
                className="w-1/6 shrink-0 tracking-widest"
              >
                球場名稱
              </label>
              <input
                onChange={handleCourtName}
                className="h-8 w-full rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/60 focus:bg-white/90 focus:text-black/90"
                id="courtName"
                type="text"
                placeholder="請輸入場地名稱"
              />
            </div>

            <div className="flex w-full items-center">
              <p className="w-1/6 shrink-0 tracking-widest">開放時間</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <label htmlFor="startTime">開始時間</label>
                  <input
                    onChange={handleStartTime}
                    id="startTime"
                    type="time"
                    defaultValue="08:00"
                    className="h-8 rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="endTime">結束時間</label>
                  <input
                    onChange={handleEndTime}
                    id="endTime"
                    type="time"
                    defaultValue="17:00"
                    className="h-8 rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
                  />
                </div>
              </div>
            </div>

            <div className="flex">
              <label
                htmlFor="courtType"
                className="w-1/6 shrink-0 tracking-widest"
              >
                球場類型
              </label>
              <div className="flex gap-4">
                <label>
                  <input
                    onChange={handleCourtType}
                    name="courtType"
                    type="radio"
                    value="室內場"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#0492D9]">
                    室內
                  </div>
                </label>
                <label>
                  <input
                    onChange={handleCourtType}
                    name="courtType"
                    type="radio"
                    value="室外場"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#0492D9]">
                    室外
                  </div>
                </label>
              </div>
            </div>

            <div className="flex">
              <label
                htmlFor="courtAddress"
                className="w-1/6 shrink-0 tracking-widest"
              >
                球場地址
              </label>
              <input
                onChange={handleCourtAddress}
                id="courtAddress"
                type="text"
                className="h-8 w-full rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/60 focus:bg-white/90 focus:text-black/90"
                placeholder="請輸入球場地址"
              />
            </div>

            <div className="flex">
              <p className="w-1/6 shrink-0 tracking-widest">鄰近設施</p>
              <div className="flex gap-4">
                <label htmlFor="isPark">
                  <input
                    onChange={handleIsPark}
                    id="isPark"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#0492D9]">
                    停車場
                  </div>
                </label>

                <label htmlFor="isBus">
                  <input
                    onChange={handleIsBus}
                    id="isBus"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#0492D9]">
                    公車站
                  </div>
                </label>

                <label htmlFor="isMRT">
                  <input
                    onChange={handleIsMRT}
                    id="isMRT"
                    type="checkbox"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#0492D9]">
                    捷運站
                  </div>
                </label>
              </div>
            </div>

            <div className="flex">
              <label htmlFor="price" className="w-1/6 shrink-0 tracking-widest">
                場地費用
              </label>
              <input
                onChange={handlePrice}
                id="price"
                type="text"
                className="h-8 w-full rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/60 focus:bg-white/90 focus:text-black/90"
                placeholder="請輸入使用費用 (ex. $2,000/hr, 免費)"
              />
            </div>
          </div>
          {/* 右欄-上傳照片 */}
          <div className="flex w-1/2 flex-col gap-4">
            {/* 上傳複數檔案需加上multiple */}
            <input
              className="w-full rounded-full border border-white/30 bg-white/5 px-8 py-2 hover:bg-white/10"
              type="file"
              multiple
              onChange={(e) => {
                handleFileChange(e);
              }}
            />
            <div className="grid grid-cols-2 gap-x-2">
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
        </div>
        {message && <p className="text-center text-[#FFCC66]">{message}</p>}
        <button
          className="rounded-xl border-2 border-white/50 bg-[#0492D9] px-8 py-1 text-xl font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
          onClick={() => {
            postCourt();
          }}
        >
          提交
        </button>
      </div>
      {/* 球場列表 */}
      <h2 className="w-full text-center text-3xl text-white">球場列表</h2>
      <div className="grid grid-cols-4 gap-10 gap-y-14 px-20">
        {courtData &&
          courtData.length != 0 &&
          courtData.map((court) => {
            return (
              <div
                key={court._id}
                className="courtCard h-[480px] w-full overflow-hidden rounded-2xl border-2 border-white/10 bg-[#062340] duration-500 hover:border-white/50 hover:bg-[#083159]"
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
                <div className="flex h-2/5 w-full flex-col justify-between gap-2 px-6 py-4">
                  {/* 標題欄 */}
                  <div className="flex w-full flex-col flex-wrap items-start gap-2">
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
                  <div className="flex w-full flex-wrap justify-between gap-4 border-t border-white/40 pt-4 text-white">
                    {/* icon */}
                    <figure className="flex gap-x-2">
                      <span>{court.traffic}</span>
                      {court.isPark ? (
                        <img src={"./pic/courtCard/parking_true.svg"}></img>
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
                    <div className="flex w-full justify-between">
                      <button className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm tracking-widest hover:bg-[#0492D9]">
                        修改資料
                      </button>
                      <button
                        onClick={handleDelete}
                        className="rounded-full border border-white/30 bg-[#AE2514] px-4 py-1 text-sm tracking-widest hover:bg-[#cc2b16]"
                        id={court._id}
                      >
                        刪除球場
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddCourt;
