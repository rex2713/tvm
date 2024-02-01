import React from "react";

const MemberLogin = () => {
  window.scrollTo(0, 0);
  return (
    <main className="flex h-[500px] w-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-20">
      {/* <!-- 登入表單 --> */}
      <form
        action=""
        className="flex w-[30%] items-end justify-center  gap-10 rounded-3xl bg-[#123659] px-20 py-12"
      >
        {/* <!-- 帳密輸入 --> */}
        <article className="flex flex-col gap-10 py-2 text-white">
          <label htmlFor="account" className="">
            帳號：
            <input type="text" id="account" className="h-7 rounded-md" />
          </label>
          <label htmlFor="password" className="">
            密碼：
            <input type="text" id="password" className="h-7 rounded-md" />
          </label>
        </article>
        {/* <!-- 登入按鈕 --> */}
        <input
          type="submit"
          className="h-4/5 w-1/3 shrink-0 cursor-pointer rounded-xl border-2 border-white/50 bg-[#0492D9] text-white"
          value="登入"
        />
      </form>
      {/* <!-- 快速登入按鈕 --> */}
      {/* <button
        id="googleLogin"
        className="flex gap-4 rounded-3xl bg-white px-5 py-2 text-[#B3B3B3]"
      >
        <figure className="h-6 w-6">
          <img src="../../pic/google-icon.svg" alt="" />
        </figure>
        Google快速登入
      </button> */}
    </main>
  );
};

export default MemberLogin;
