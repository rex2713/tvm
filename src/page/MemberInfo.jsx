import React from "react";
import AuthService from "../../services/auth-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MemberInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    //如果已經存在上傳頭像，處理預覽
    if (
      user.user.photoSelected &&
      !user.user.photoSelected.includes("men") &&
      !user.user.photoSelected.includes("girl")
    ) {
      setPreview(user.user.photoSelected);
    }
  }, []);
  const navigate = useNavigate();
  //從localStorage解析使用者資料
  const user = AuthService.getCurrentUser();

  let _id = user.user._id;
  // console.log(_id);

  //設定表單資料state更新
  const [username, setUsername] = useState(user.user.username);
  const [skillLevel, setSkillLevel] = useState(user.user.skillLevel || null);
  const [goodAtPosition, setGoodAtPosition] = useState(
    user.user.goodAtPosition || [],
  );
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [photoSelected, setPhotoSelected] = useState(
    user.user.photoSelected || null,
  );

  //設定表單資料處理函式
  const handleUsername = (e) => setUsername(e.target.value);
  const handleSkillLevel = (e) => setSkillLevel(e.target.value);
  const handleSpiker = (e) => {
    // console.log(e.target.checked);
    //檢查goodAtPosition數組內使否有該數值並作相應處理
    if (e.target.checked) {
      if (!goodAtPosition.includes("主攻")) {
        setGoodAtPosition([...goodAtPosition, "主攻"]);
      }
    } else {
      if (goodAtPosition.includes("主攻")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "主攻"));
      }
    }
  };
  const handleMiddleBlocker = (e) => {
    if (e.target.checked) {
      if (!goodAtPosition.includes("欄中")) {
        setGoodAtPosition([...goodAtPosition, "欄中"]);
      }
    } else {
      if (goodAtPosition.includes("欄中")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "欄中"));
      }
    }
  };
  const handleOpposite = (e) => {
    if (e.target.checked) {
      if (!goodAtPosition.includes("副攻")) {
        setGoodAtPosition([...goodAtPosition, "副攻"]);
      }
    } else {
      if (goodAtPosition.includes("副攻")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "副攻"));
      }
    }
  };
  const handleSetter = (e) => {
    if (e.target.checked) {
      if (!goodAtPosition.includes("舉球")) {
        setGoodAtPosition([...goodAtPosition, "舉球"]);
      }
    } else {
      if (goodAtPosition.includes("舉球")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "舉球"));
      }
    }
  };
  const handleLibero = (e) => {
    if (e.target.checked) {
      if (!goodAtPosition.includes("自由")) {
        setGoodAtPosition([...goodAtPosition, "自由"]);
      }
    } else {
      if (goodAtPosition.includes("自由")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "自由"));
      }
    }
  };

  //設定頭像選擇
  const handleMen1 = () => {
    setPhotoSelected("men1");
    setFile(null);
    setPreview(null);
  };
  const handleMen2 = () => {
    setPhotoSelected("men2");
    setFile(null);
    setPreview(null);
  };
  const handleMen3 = () => {
    setPhotoSelected("men3");
    setFile(null);
    setPreview(null);
  };
  const handleMen4 = () => {
    setPhotoSelected("men4");
    setFile(null);
    setPreview(null);
  };
  const handleMen5 = () => {
    setPhotoSelected("men5");
  };
  const handleMen6 = () => {
    setPhotoSelected("men6");
    setFile(null);
    setPreview(null);
  };
  const handleGirl1 = () => {
    setPhotoSelected("girl1");
    setFile(null);
    setPreview(null);
  };
  const handleGirl2 = () => {
    setPhotoSelected("girl2");
    setFile(null);
    setPreview(null);
  };
  const handleGirl3 = () => {
    setPhotoSelected("girl3");
    setFile(null);
    setPreview(null);
  };
  const handleGirl4 = () => {
    setPhotoSelected("girl4");
    setFile(null);
    setPreview(null);
  };
  const handleGirl5 = () => {
    setPhotoSelected("girl5");
    setFile(null);
    setPreview(null);
  };
  const handleGirl6 = () => {
    setPhotoSelected("girl6");
    setFile(null);
    setPreview(null);
  };

  //設定頭像上傳
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const previewURL = URL.createObjectURL(e.target.files[0]);
    setPreview(previewURL);
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
    setPhotoSelected(null);
  };
  //設定清除上傳頭像
  const handleClear = () => {
    setPhotoSelected("men1");
    setFile(null);
    setPreview(null);
  };

  //設定儲存按鈕
  const handleSave = () => {
    console.log(photoSelected);
    console.log(file);
    console.log(username);
    console.log(skillLevel);
    console.log(goodAtPosition);
    const formData = new FormData();
    if (photoSelected) formData.append("photoSelected", photoSelected);
    if (file) formData.append("file", file);
    if (username) formData.append("username", username);
    if (skillLevel) formData.append("skillLevel", skillLevel);
    if (goodAtPosition) {
      formData.append("goodAtPosition", goodAtPosition);
    }

    AuthService.updateUser(formData, _id)
      .then((res) => {
        console.log(res.data.updateUser);
        const user = JSON.parse(localStorage.getItem("user"));
        user.user = res.data.updateUser;
        localStorage.setItem("user", JSON.stringify(user));
        window.alert("儲存資料成功");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <main className="flex h-full w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <div className="my-20 flex h-full w-5/6 justify-center gap-[2vw]">
        <div className="flex h-full w-4/6 flex-col items-center gap-10 ">
          <form
            action=""
            className="flex h-3/5 w-full flex-col items-center justify-center gap-10 rounded-3xl bg-[#123659] px-20 py-12 text-white"
          >
            {/* <!-- 資料輸入欄 --> */}
            {/* 頭像選擇 */}
            <div className="flex w-full items-start gap-2">
              <span className="w-24 shrink-0 tracking-widest">頭像選擇</span>
              <div className="flex flex-wrap gap-4">
                <label htmlFor="men1">
                  <input
                    name="photo"
                    checked={photoSelected === "men1"}
                    onChange={handleMen1}
                    type="radio"
                    id="men1"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men1.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男一
                  </div>
                </label>
                <label htmlFor="men2">
                  <input
                    name="photo"
                    checked={photoSelected === "men2"}
                    onChange={handleMen2}
                    type="radio"
                    id="men2"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men2.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男二
                  </div>
                </label>
                <label htmlFor="men3">
                  <input
                    name="photo"
                    checked={photoSelected === "men3"}
                    onChange={handleMen3}
                    type="radio"
                    id="men3"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men3.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男三
                  </div>
                </label>
                <label htmlFor="men4">
                  <input
                    name="photo"
                    checked={photoSelected === "men4"}
                    onChange={handleMen4}
                    type="radio"
                    id="men4"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men4.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男四
                  </div>
                </label>
                <label htmlFor="men5">
                  <input
                    name="photo"
                    checked={photoSelected === "men5"}
                    onChange={handleMen5}
                    type="radio"
                    id="men5"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men5.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男五
                  </div>
                </label>
                <label htmlFor="men6">
                  <input
                    name="photo"
                    checked={photoSelected === "men6"}
                    onChange={handleMen6}
                    type="radio"
                    id="men6"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/men6.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    男六
                  </div>
                </label>
                <label htmlFor="girl1">
                  <input
                    name="photo"
                    checked={photoSelected === "girl1"}
                    onChange={handleGirl1}
                    type="radio"
                    id="girl1"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl1.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女一
                  </div>
                </label>
                <label htmlFor="girl2">
                  <input
                    name="photo"
                    checked={photoSelected === "girl2"}
                    onChange={handleGirl2}
                    type="radio"
                    id="girl2"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl2.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女二
                  </div>
                </label>
                <label htmlFor="girl3">
                  <input
                    name="photo"
                    checked={photoSelected === "girl3"}
                    onChange={handleGirl3}
                    type="radio"
                    id="girl3"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl3.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女三
                  </div>
                </label>
                <label htmlFor="girl4">
                  <input
                    name="photo"
                    checked={photoSelected === "girl4"}
                    onChange={handleGirl4}
                    type="radio"
                    id="girl4"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl4.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女四
                  </div>
                </label>
                <label htmlFor="girl5">
                  <input
                    name="photo"
                    checked={photoSelected === "girl5"}
                    onChange={handleGirl5}
                    type="radio"
                    id="girl5"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl5.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女五
                  </div>
                </label>
                <label htmlFor="girl6">
                  <input
                    name="photo"
                    checked={photoSelected === "girl6"}
                    onChange={handleGirl6}
                    type="radio"
                    id="girl6"
                    className="peer hidden"
                  />
                  <img
                    className="w-[78px]"
                    src="../../public/pic/icon/member/girl6.png"
                    alt=""
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    女六
                  </div>
                </label>
                <label htmlFor="uploadSelf" className="w-full">
                  <input
                    onChange={handleFileChange}
                    type="file"
                    id="uploadSelf"
                    className="peer hidden"
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    自行上傳
                  </div>
                </label>
                <div className="m-auto w-1/2">
                  {preview && (
                    <>
                      <p className="text-center">預覽</p>
                      <img src={preview} />
                      <button onClick={handleClear}>清除</button>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* 使用者名稱 */}
            <label htmlFor="account" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">使用者名稱</span>
              <input
                onChange={handleUsername}
                type="text"
                id="account"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white focus:bg-white/90 focus:text-black/90"
                placeholder={user.user.username}
              />
            </label>
            {/* Email */}
            <label htmlFor="email" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">Email</span>
              <input
                type="email"
                id="email"
                disabled
                className=" h-8 w-full shrink rounded-md border border-white/10 bg-white/10 px-4 text-white placeholder:text-white"
                placeholder={user.user.email}
              />
            </label>
            {/* 修改密碼 */}
            {/* <label
              htmlFor="setPassword"
              className="flex w-full items-center gap-2"
            >
              <span className="w-24 shrink-0 tracking-widest">修改密碼</span>
              <input
                // onChange={}
                type="password"
                id="setPassword"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white focus:bg-white/90 focus:text-black/90"
              />
            </label> */}
            {/* 確認密碼 */}
            {/* <label
              htmlFor="confirmPassword"
              className="flex w-full items-center gap-2"
            >
              <span className="w-24 shrink-0 tracking-widest">確認密碼</span>
              <input
                // onChange={}
                type="password"
                id="setPassword"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white focus:bg-white/90 focus:text-black/90"
              />
            </label> */}
            {/* 球技程度 */}
            <label htmlFor="" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">球技程度</span>
              <select
                onChange={handleSkillLevel}
                name=""
                id=""
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              >
                <option selected={user.user.skillLevel == "新手"} value="新手">
                  新手
                </option>
                <option selected={user.user.skillLevel == "系隊"} value="系隊">
                  系隊
                </option>
                <option selected={user.user.skillLevel == "校隊"} value="校隊">
                  校隊
                </option>
                <option selected={user.user.skillLevel == "體保"} value="體保">
                  體保
                </option>
              </select>
            </label>
            {/* 擅長位置 */}
            <div className="flex w-full items-start gap-2">
              <span className="w-24 shrink-0 tracking-widest">擅長位置</span>
              <div className="flex flex-wrap gap-4">
                <label htmlFor="spiker">
                  <input
                    onChange={handleSpiker}
                    type="checkbox"
                    id="spiker"
                    className="peer hidden"
                    checked={goodAtPosition.includes("主攻")}
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    主攻
                  </div>
                </label>
                <label htmlFor="middleBlocker">
                  <input
                    type="checkbox"
                    id="middleBlocker"
                    className="peer hidden"
                    onChange={handleMiddleBlocker}
                    checked={goodAtPosition.includes("欄中")}
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    攔中
                  </div>
                </label>
                <label htmlFor="opposite">
                  <input
                    type="checkbox"
                    id="opposite"
                    className="peer hidden"
                    onChange={handleOpposite}
                    checked={goodAtPosition.includes("副攻")}
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    副攻
                  </div>
                </label>
                <label htmlFor="setter">
                  <input
                    onChange={handleSetter}
                    type="checkbox"
                    id="setter"
                    className="peer hidden"
                    checked={goodAtPosition.includes("舉球")}
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    舉球
                  </div>
                </label>
                <label htmlFor="libero">
                  <input
                    onChange={handleLibero}
                    type="checkbox"
                    id="libero"
                    className="peer hidden"
                    checked={goodAtPosition.includes("自由")}
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    自由
                  </div>
                </label>
              </div>
            </div>
            {/* 好友 */}
            <div className="flex w-full items-start gap-4">
              <span className="w-24 shrink-0 tracking-widest">好友管理</span>
              <div className="grid w-full grid-cols-4 gap-[1vw]">
                {/* 好友卡片 */}
                {/* button設定刪除好友功能 */}
                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  {/* 刪除icon(僅視覺示意)，button功能設在整張卡片，可以做alert確認防呆機制 */}
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  {/* 卡片內容 */}
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/men3.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生1
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        主攻、副攻
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        體保
                      </p>
                    </div>
                  </div>
                </button>
                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  {/* 刪除icon(僅視覺示意)，button功能設在整張卡片，可以做alert確認防呆機制 */}
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  {/* 卡片內容 */}
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/men6.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生2
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        主攻、攔中
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        體保
                      </p>
                    </div>
                  </div>
                </button>

                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  {/* 刪除icon(僅視覺示意)，button功能設在整張卡片，可以做alert確認防呆機制 */}
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  {/* 卡片內容 */}
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/girl2.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生3
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        舉球、自由
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        體保
                      </p>
                    </div>
                  </div>
                </button>

                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/men1.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生4
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        舉球
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        新手
                      </p>
                    </div>
                  </div>
                </button>

                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/girl4.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生5
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        副攻
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        校隊
                      </p>
                    </div>
                  </div>
                </button>

                <button className="group relative h-52 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                    -
                  </div>
                  <div className="absolute top-4 flex flex-col items-center gap-4">
                    <img
                      className="w-1/2 rounded-full bg-white bg-clip-border"
                      src="../../pic/icon/member/girl5.png"
                      alt=""
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <p className="text-lg font-bold tracking-widest">
                        北商學生6
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        主攻
                      </p>
                      <p className="text-sm tracking-widest text-white/70">
                        系隊
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>

          {/* <!-- 儲存變更按鈕 --> */}
          <button
            onClick={handleSave}
            className="w-1/6 rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-lg font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
          >
            儲存
          </button>
        </div>
      </div>
    </main>
  );
};

export default MemberInfo;
