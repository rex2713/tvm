import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import AuthService from "../../services/auth-service";
import { useState } from "react";

const MemberSign = () => {
  const data = useOutletContext();
  const isLogIn = data.isLogIn;
  //設置導航功能
  const navigate = useNavigate();
  //設置各input狀態
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordCheck, setPasswordCheck] = useState("");
  let [message, setMessage] = useState(" ");
  //設定input監聽
  let handleUsername = (e) => {
    setUsername(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  //設定註冊按鈕click
  let handleRegister = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      setMessage('"password" must match the "confirmation password"');
    } else {
      AuthService.register(username, email, password)
        .then(() => {
          window.alert("註冊成功，即將為您跳轉到登入頁面");
          navigate("/member/login");
        })
        .catch((e) => {
          setMessage(e.response.data);
          console.log(message);
        });
    }
  };

  return (
    <main className="flex h-[500px] w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <form
        action=""
        className="flex w-full flex-col items-center justify-center gap-10"
      >
        {/* <!-- 資料輸入欄 --> */}
        <article className="flex w-1/3 flex-col items-center justify-between gap-y-8 rounded-3xl bg-[#123659] px-20 py-10 text-white">
          <label htmlFor="account" className="flex w-full gap-x-5">
            <span className="w-20 shrink-0">暱稱：</span>
            <input
              onChange={handleUsername}
              type="text"
              id="account"
              className="h-7 w-full shrink rounded-md text-black"
            />
          </label>
          <label htmlFor="email" className="flex w-full gap-x-5">
            <span className="w-20 shrink-0">Email：</span>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              className="h-7 w-full shrink rounded-md text-black"
            />
          </label>
          <label htmlFor="setPassword" className="flex w-full gap-x-5">
            <span className="w-20 shrink-0">設定密碼：</span>
            <input
              onChange={handlePassword}
              type="password"
              id="setPassword"
              className="h-7 w-full shrink rounded-md text-black"
            />
          </label>
          <label htmlFor="confirmPassword" className="flex w-full gap-x-5">
            <span className="w-20 shrink-0">確認密碼：</span>
            <input
              onChange={handlePasswordCheck}
              type="password"
              id="confirmPassword"
              className="h-7 w-full shrink rounded-md text-black"
            />
          </label>
        </article>
        {/* 錯誤訊息 */}
        {message && (
          <div className="px-auto h-12 text-lg text-[#FFCC66]">{message}</div>
        )}

        {/* <!-- 註冊按鈕 --> */}
        <button
          onClick={handleRegister}
          className="w-1/6 cursor-pointer rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-white"
        >
          註冊會員
        </button>
      </form>
    </main>
  );
};

export default MemberSign;
