import React from "react";
import { Rating } from "@material-tailwind/react";

const CourtInfo = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-6 bg-gradient-to-b from-[#082A4D] to-[#000000] pt-28">
      <div className="relative flex h-[50vh] w-full overflow-hidden">
        <button className="group  flex h-full w-[20vw] items-center justify-center bg-black/30">
          <img
            className="w-2/5 opacity-20 group-hover:opacity-50"
            src="../../pic/icon/backward.svg"
            alt=""
          />
        </button>
        <div className="overflow-hidden">
          <ul className="flex h-full w-full duration-300">
            <li className="w-[60vw]">
              <img src="./pic/courtCard/outdoorA/outdoorA1.jpg" alt="" />
            </li>
            <li>
              <img src="./pic/courtCard/outdoorA/outdoorA2.jpg" alt="" />
            </li>
            <li>
              <img src="./pic/courtCard/outdoorA/outdoorA3.jpg" alt="" />
            </li>
            <li>
              <img src="./pic/courtCard/outdoorA/outdoorA4.jpg" alt="" />
            </li>
          </ul>
        </div>
        <button className="group flex h-full w-[20vw] items-center justify-center bg-black/30">
          <img
            className="w-2/5 opacity-20 group-hover:opacity-50"
            src="../../pic/icon/forward.svg"
            alt=""
          />
        </button>
      </div>

      {/* 球場內容 */}
      <div className="flex w-[80vw] flex-col items-center justify-center gap-20 rounded-t-3xl bg-[#082A4D] px-20 py-5">
        <section className="flex w-full px-10">
          {/* 資訊文字 */}
          <article className="w-7/12">
            {/* 球場標題 */}
            <div className="my-8 flex items-center gap-6">
              <img
                className="h-12 w-12"
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
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">開放時間</p>
              <p>24小時</p>
            </div>
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">球場數</p>
              <p>4座 (男網2座/女網2座)</p>
            </div>
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">地址</p>
              <p>234新北市永和區環河西路二段</p>
            </div>
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">交通</p>
              <p>捷運頂溪站</p>
            </div>
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">停車場</p>
              <p>綠寶石區汽機車停車場</p>
            </div>
            <div className="my-4 flex text-xl tracking-wider text-white/70">
              <p className="w-[6.5rem] font-bold">費用</p>
              <p>免費</p>
            </div>
          </article>
          {/* Google地圖 */}
          <div className="mt-8 h-80 w-5/12 rounded-xl bg-white py-1"></div>
        </section>
        {/* 加入隊伍 */}
        <section className="flex w-full flex-col items-center justify-center gap-5">
          <h3 className="text-2xl font-bold text-[#FFCC66]">加入隊伍</h3>
          <div className="no-scrollbar flex w-full justify-start gap-[1.5vw] overflow-x-auto">
            {/* 隊伍 */}
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
            <button className="h-45 flex w-56 shrink-0 flex-col items-center justify-center rounded-xl border border-transparent bg-[#011E37] p-4 duration-300 hover:border-white/30 hover:bg-[#01213d]">
              <h4 className="w-full text-center text-xl font-black tracking-widest text-white">
                Team-Apple
              </h4>
              <h5 className="text-l w-full text-center font-black tracking-widest text-[#FFE8A3]">
                12/1(五)-下午
              </h5>
              <p className="my-2 w-full text-center text-white/70">
                徵求: 主攻、攔中
              </p>
              <p className="w-4/5 rounded-full border border-transparent bg-[#0492D9] py-1 tracking-widest text-white">
                加入隊伍
              </p>
            </button>
          </div>
        </section>
        {/* 場地評論 */}
        <section className="flex w-full flex-col items-center justify-center gap-5 px-10">
          <h3 className="text-2xl font-bold text-[#FFCC66]">場地評價</h3>
          {/* 撰寫評論 */}
          <div className="flex w-full items-center gap-10 rounded-xl bg-[#011E37] px-12 py-5 tracking-widest text-white/50">
            <img
              className="h-14 w-14 shrink-0 rounded-full bg-white bg-clip-border"
              src="../../pic/icon/member/no login.png"
              alt=""
            />
            <form action="" className="flex w-full items-center gap-5">
              <div className="flex w-full flex-col gap-4">
                {/* 星星評分 */}
                <div className="flex items-center gap-2">
                  <p>場地評分</p>
                  <Rating value={3} className="flex text-[#FFCC66]/80" />
                </div>
                <textarea
                  className="h-20 w-full rounded-xl bg-white/20 px-4 py-2 text-white/80 focus:bg-white/90 focus:text-black/90"
                  name=""
                  id=""
                  placeholder="撰寫評論"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex h-10 w-10 rounded-full bg-white/20 hover:bg-[#0492D9] "
              >
                <div className="flex h-10 w-10 items-center justify-center opacity-20 hover:opacity-100">
                  <img
                    className="h-6 w-6 "
                    src="../../pic/icon/send.svg"
                    alt=""
                  />
                </div>
              </button>
            </form>
          </div>
          {/* 其他評論 */}
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between gap-10 rounded-xl bg-[#011E37] px-12 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="h-14 w-14 shrink-0 rounded-full bg-white bg-clip-border"
                  src="../../pic/icon/member/girl1.png"
                  alt=""
                />
                <p className="w-150">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-center gap-2">
                <img className="h-6 w-6" src="../../pic/icon/star.svg" alt="" />
                <p className="text-2xl font-bold">4.8</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-10 rounded-xl bg-[#011E37] px-12 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="h-14 w-14 shrink-0 rounded-full bg-white bg-clip-border"
                  src="../../pic/icon/member/men5.png"
                  alt=""
                />
                <p className="w-150">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-center gap-2">
                <img className="h-6 w-6" src="../../pic/icon/star.svg" alt="" />
                <p className="text-2xl font-bold">4.2</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-between gap-10 rounded-xl bg-[#011E37] px-12 py-5 leading-8 tracking-wide text-white/60">
              <div className="w-7/8 flex items-center gap-10">
                <img
                  className="h-14 w-14 shrink-0 rounded-full bg-white bg-clip-border"
                  src="../../pic/icon/member/girl2.png"
                  alt=""
                />
                <p className="w-150">
                  場地乾淨整潔，場地乾淨整潔，場地乾淨整潔，場地乾淨整潔。
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img className="h-6 w-6" src="../../pic/icon/star.svg" alt="" />
                <p className="text-2xl font-bold">4.7</p>
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
              className="flex h-10 w-14 items-center justify-center rounded-full bg-white/10 text-white/80 duration-500 hover:bg-white/10 hover:text-white/80"
              href=""
            >
              1
            </a>
            <a
              className="flex h-10 w-14 items-center justify-center rounded-full duration-500 hover:bg-white/10 hover:text-white/80"
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
