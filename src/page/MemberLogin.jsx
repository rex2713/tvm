import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import { useState } from "react";

const MemberLogin = () => {
  const navigate = useNavigate();

  //處理input輸入
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await AuthService.login(email, password);
      // console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功，現在將為您導向個人資料頁面");
      navigate("/");
    } catch (e) {
      // console.log(e);
      setMessage(e.response.data);
    }
  };

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
            Email:
            <input
              onChange={handleEmail}
              type="text"
              id="account"
              className="h-7 rounded-md text-black"
            />
          </label>
          <label htmlFor="password" className="">
            密碼：
            <input
              onChange={handlePassword}
              type="text"
              id="password"
              className="h-7 rounded-md text-black"
            />
          </label>
        </article>

        {/* <!-- 登入按鈕 --> */}
        <button
          onClick={handleLogin}
          className="h-4/5 w-1/3 shrink-0 cursor-pointer rounded-xl border-2 border-white/50 bg-[#0492D9] text-white"
        >
          登入
        </button>
      </form>
      {/* 錯誤訊息 */}
      {message && (
        <div className="px-auto h-12 text-lg text-[#FFCC66]">{message}</div>
      )}
    </main>
  );
};

export default MemberLogin;
