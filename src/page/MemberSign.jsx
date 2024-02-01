import React from "react";

const MemberSign = () => {
  window.scrollTo(0, 0);
  return (
    <main className="flex h-[500px] w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <form
        action=""
        className="flex w-full flex-col items-center justify-center gap-10"
      >
        {/* <!-- 資料輸入欄 --> */}
        <article className="flex w-1/3 flex-col items-center justify-between gap-y-8 rounded-3xl bg-[#123659] px-20 py-10 text-white">
          <label htmlFor="account" className="flex w-full gap-x-5">
            <span className="block w-20 shrink-0">帳號：</span>
            <input
              type="text"
              id="account"
              className="block h-7 w-full shrink rounded-md"
            />
          </label>
          <label htmlFor="setPassword" className="flex w-full gap-x-5">
            <span className="block w-20 shrink-0">設定密碼：</span>
            <input
              type="password"
              id="setPassword"
              className="block h-7 w-full shrink rounded-md"
            />
          </label>
          <label htmlFor="confirmPassword" className="flex w-full gap-x-5">
            <span className="block w-20 shrink-0">確認密碼：</span>
            <input
              type="password"
              id="confirmPassword"
              className="block h-7 w-full shrink rounded-md"
            />
          </label>
          {/* <label htmlFor="phoneNum" className="flex w-full gap-x-5">
            <span className="block w-20 shrink-0">連絡電話：</span>
            <input
              type="tel"
              id="phoneNum"
              className="block h-7 w-full shrink rounded-md"
            />
          </label> */}
          <label htmlFor="email" className="flex w-full gap-x-5">
            <span className="block w-20 shrink-0">E-mail：</span>
            <input
              type="email"
              id="email"
              className="block h-7 w-full shrink rounded-md"
            />
          </label>
        </article>
        {/* <!-- 註冊按鈕 --> */}
        <input
          type="submit"
          className="w-1/6 cursor-pointer rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-white"
          value="註冊"
        />
      </form>
    </main>
  );
};

export default MemberSign;
