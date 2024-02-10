import React from "react";

const MemberInfo = () => {
  window.scrollTo(0, 0);
  return (
    <main className="flex h-full w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <div className="my-20 flex h-full w-5/6 justify-center gap-[2vw]">
        {/* 左邊項目欄 */}
        {/* <div className=" flex w-1/6 flex-col items-center gap-10">
          <ul className="flex w-2/3 flex-col items-center justify-center gap-4 rounded-3xl bg-[#123659] py-8 text-white">
            <li>
              <button className="rounded-xl px-6 py-2 hover:bg-white/10 hover:text-[#E8F8B9]">
                會員資料
              </button>
            </li>
            <li>
              <button className="rounded-xl px-6 py-2 hover:bg-white/10 hover:text-[#E8F8B9]">
                歷史紀錄
              </button>
            </li>
          </ul>
          <button className="w-1/2 rounded-xl border-2 border-white/50 bg-[#98C414] py-1 text-lg font-bold tracking-[.2rem] text-white hover:bg-[#b0c964]">
            登出
          </button>
        </div> */}
        {/* 右欄 */}
        <div className="flex h-full w-4/6 flex-col items-center gap-10 ">
          <form
            action=""
            className="flex h-3/5 w-full flex-col items-center justify-center gap-10 rounded-3xl bg-[#123659] px-20 py-12 text-white"
          >
            {/* <!-- 資料輸入欄 --> */}
            {/* 使用者名稱 */}
            <label htmlFor="account" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">使用者名稱</span>
              <input
                // onChange={}
                type="text"
                id="account"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white focus:bg-white/90 focus:text-black/90"
                placeholder="北商學生"
              />
            </label>
            {/* Email */}
            <label htmlFor="email" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">Email</span>
              <input
                // onChange={}
                type="email"
                id="email"
                disabled
                className=" h-8 w-full shrink rounded-md border border-white/10 bg-white/10 px-4 text-white placeholder:text-white"
                placeholder="123@gmail.com"
              />
            </label>
            {/* 修改密碼 */}
            <label
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
            </label>
            {/* 確認密碼 */}
            <label
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
            </label>
            {/* 球技程度 */}
            <label htmlFor="" className="flex w-full items-center gap-2">
              <span className="w-24 shrink-0 tracking-widest">球技程度</span>
              <select
                name=""
                id=""
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              >
                <option value="體保">體保</option>
                <option value="校隊">校隊</option>
                <option value="系隊">系隊</option>
                <option value="新手">新手</option>
              </select>
            </label>
            {/* 擅長位置 */}
            <div className="flex w-full items-start gap-2">
              <span className="w-24 shrink-0 tracking-widest">擅長位置</span>
              <div className="flex flex-wrap gap-4">
                <label htmlFor="spiker">
                  <input type="checkbox" id="spiker" className="peer hidden" />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    主攻
                  </div>
                </label>
                <label htmlFor="middleBlocker">
                  <input
                    type="checkbox"
                    id="middleBlocker"
                    className="peer hidden"
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
                  />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    副攻
                  </div>
                </label>
                <label htmlFor="setter">
                  <input type="checkbox" id="setter" className="peer hidden" />
                  <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#98C414]">
                    舉球
                  </div>
                </label>
                <label htmlFor="libero">
                  <input type="checkbox" id="libero" className="peer hidden" />
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
            // onClick={}
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
