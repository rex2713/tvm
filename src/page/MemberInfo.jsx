import React from "react";
import AuthService from "../../services/auth-service";
import { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const MemberInfo = () => {
  const outlet = useOutletContext();
  const { memberIconSrc, setMemberIconSrc } = outlet;
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
      if (!goodAtPosition.includes("攔中")) {
        setGoodAtPosition([...goodAtPosition, "攔中"]);
      }
    } else {
      if (goodAtPosition.includes("攔中")) {
        setGoodAtPosition(goodAtPosition.filter((value) => value !== "攔中"));
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
    setFile("");
    setPreview("");
  };
  const handleMen2 = () => {
    setPhotoSelected("men2");
    setFile("");
    setPreview("");
  };
  const handleMen3 = () => {
    setPhotoSelected("men3");
    setFile("");
    setPreview("");
  };
  const handleMen4 = () => {
    setPhotoSelected("men4");
    setFile("");
    setPreview("");
  };
  const handleMen5 = () => {
    setPhotoSelected("men5");
  };
  const handleMen6 = () => {
    setPhotoSelected("men6");
    setFile("");
    setPreview("");
  };
  const handleGirl1 = () => {
    setPhotoSelected("girl1");
    setFile("");
    setPreview("");
  };
  const handleGirl2 = () => {
    setPhotoSelected("girl2");
    setFile("");
    setPreview("");
  };
  const handleGirl3 = () => {
    setPhotoSelected("girl3");
    setFile("");
    setPreview("");
  };
  const handleGirl4 = () => {
    setPhotoSelected("girl4");
    setFile("");
    setPreview("");
  };
  const handleGirl5 = () => {
    setPhotoSelected("girl5");
    setFile("");
    setPreview("");
  };
  const handleGirl6 = () => {
    setPhotoSelected("girl6");
    setFile("");
    setPreview("");
  };

  //設定頭像上傳
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    const previewURL = URL.createObjectURL(e.target.files[0]);
    setPreview(previewURL);
    setPhotoSelected("");
    setMemberIconSrc("連動NavIcon");
    e.target.value = null; //清空input值，使下次重複選擇相同檔案也可觸發
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
  };
  //設定清除上傳頭像
  const handleClear = () => {
    setFile("");
    setPreview("");
    setPhotoSelected("men1");
  };

  //設定儲存按鈕
  const handleSave = () => {
    // console.log(photoSelected);
    // console.log(file);
    // console.log(username);
    // console.log(skillLevel);
    // console.log(goodAtPosition);
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
        // console.log(res.data.updateUser);
        const user = JSON.parse(localStorage.getItem("user"));
        user.user = res.data.updateUser;
        localStorage.setItem("user", JSON.stringify(user));

        //處理永久硬碟複製
        AuthService.copyRenderDisk()
          .then(() => {
            console.log("成功複製RenderDisk資料");
          })
          .catch((e) => {
            console.error("複製RenderDisk失敗:" + e);
          });

        window.alert("儲存資料成功");
        setMemberIconSrc(photoSelected);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  return (
    <main className="flex h-full w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <div className="my-20 flex flex-col h-full w-5/6 lg:gap-10 gap-5 justify-center items-center px-[5vw]">
          <form
            action=""
            className="flex h-3/5 w-full flex-col items-center justify-center gap-10 rounded-3xl bg-[#123659] lg:px-20 px-10 py-12 text-white"
          >
            {/* <!-- 資料輸入欄 --> */}
            {/* 頭像選擇 */}
            <div className="flex w-full items-start gap-1">
              <span className="w-24 shrink-0 tracking-widest">頭像選擇</span>
              <div className="flex w-full xl:flex-row flex-col items-start gap-4">
                <div className="grid xl:w-2/3 w-full grid-cols-6 gap-[1vw] shrink-0">
                  <label
                    htmlFor="men1"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men1"}
                      onChange={handleMen1}
                      type="radio"
                      id="men1"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men1.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男一
                    </p>
                  </label>
                  <label
                    htmlFor="men2"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men2"}
                      onChange={handleMen2}
                      type="radio"
                      id="men2"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men2.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男二
                    </p>
                  </label>
                  <label
                    htmlFor="men3"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men3"}
                      onChange={handleMen3}
                      type="radio"
                      id="men3"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men3.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男三
                    </p>
                  </label>
                  <label
                    htmlFor="men4"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men4"}
                      onChange={handleMen4}
                      type="radio"
                      id="men4"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men4.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男四
                    </p>
                  </label>
                  <label
                    htmlFor="men5"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men5"}
                      onChange={handleMen5}
                      type="radio"
                      id="men5"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men5.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男五
                    </p>
                  </label>
                  <label
                    htmlFor="men6"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "men6"}
                      onChange={handleMen6}
                      type="radio"
                      id="men6"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/men6.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      男六
                    </p>
                  </label>
                  <label
                    htmlFor="girl1"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl1"}
                      onChange={handleGirl1}
                      type="radio"
                      id="girl1"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl1.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女一
                    </p>
                  </label>
                  <label
                    htmlFor="girl2"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl2"}
                      onChange={handleGirl2}
                      type="radio"
                      id="girl2"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl2.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女二
                    </p>
                  </label>
                  <label
                    htmlFor="girl3"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl3"}
                      onChange={handleGirl3}
                      type="radio"
                      id="girl3"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl3.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女三
                    </p>
                  </label>
                  <label
                    htmlFor="girl4"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl4"}
                      onChange={handleGirl4}
                      type="radio"
                      id="girl4"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl4.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女四
                    </p>
                  </label>
                  <label
                    htmlFor="girl5"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl5"}
                      onChange={handleGirl5}
                      type="radio"
                      id="girl5"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl5.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女五
                    </p>
                  </label>
                  <label
                    htmlFor="girl6"
                    className="flex flex-col items-center justify-center"
                  >
                    <input
                      name="photo"
                      checked={photoSelected && photoSelected == "girl6"}
                      onChange={handleGirl6}
                      type="radio"
                      id="girl6"
                      className="peer hidden"
                    />
                    <img
                      className="w-[78px] shrink-0"
                      src="/pic/icon/member/girl6.png"
                      alt=""
                    />
                    <p className="cursor-pointer rounded-full bg-white/10 2xl:px-5 xl:px-3 px-2 py-1 text-center 2xl:text-base lg:text-sm text-xs tracking-wider duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      女六
                    </p>
                  </label>
                </div>
                <div className="flex xl:h-64 lg:text-base text-sm h-36 xl:w-1/3 w-full xl:flex-col flex-row items-center justify-center xl:gap-2 gap-[3vw] rounded-lg border border-white/20 p-4">
                  <label htmlFor="uploadSelf" className="xl:w-2/3 w-1/4 xl:h-1/6 h-1/2 flex items-start justify-center">
                    <input
                      onChange={handleFileChange}
                      type="file"
                      id="uploadSelf"
                      className="peer hidden"
                    />
                    <p className="cursor-pointer flex items-center justify-center w-full h-full xl:rounded-full rounded-lg bg-white/10 text-center duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                      上傳圖片
                    </p>
                  </label>

                    {preview && (
                      <>
                      <button
                          onClick={handleClear}
                          className="xl:w-2/3 w-1/6 xl:rounded-full rounded-lg bg-black/20 xl:py-1 py-2 text-white/70 hover:bg-black/50 hover:text-white"
                        >
                          清除
                        </button>
                        {/* <p className="text-center">預覽</p> */}
                        <img src={preview} className="xl:h-36 lg:h-28 h-24 xl:w-36 lg:w-28 w-24 shrink-0 object-cover border rounded-full bg-clip-border" />
                      </>
                    )}

                </div>
              </div>
            </div>
            {/* 使用者名稱 */}
            <label htmlFor="account" className="flex w-full items-center gap-1">
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
            <label htmlFor="email" className="flex w-full items-center gap-1">
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
            <label htmlFor="skill" className="flex w-full items-center gap-1">
              <span className="w-24 shrink-0 tracking-widest">球技程度</span>
              <select
                onChange={handleSkillLevel}
                name=""
                id="skill"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              >
                <option value="新手">新手</option>
                <option value="系隊">系隊</option>
                <option value="校隊">校隊</option>
                <option value="體保">體保</option>
              </select>
            </label>
            {/* 擅長位置 */}
            <div className="flex w-full items-start gap-1">
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
                    checked={goodAtPosition.includes("攔中")}
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
          </form>

          {/* <!-- 儲存變更按鈕 --> */}
          <button
            onClick={handleSave}
            className="md:w-1/6 w-1/4 rounded-xl border-2 border-white/50 bg-[#0492D9] lg:py-2 py-1 text-lg font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
          >
            儲存
          </button>
      </div>
    </main>
  );
};

export default MemberInfo;
