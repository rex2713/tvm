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
    <main className="relative flex h-[70vh] w-full justify-center bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      <div className="absolute top-20 flex h-full w-full flex-col items-center gap-10 ">
        <form
          action=""
          className="flex h-3/5 w-1/3 flex-col items-center justify-center gap-12 rounded-3xl bg-[#123659] px-20 text-white"
        >
          {/* <!-- 資料輸入欄 --> */}
          <label htmlFor="account" className="flex w-full items-center gap-2">
            <span className="w-24 shrink-0 tracking-widest">使用者名稱</span>
            <input
              onChange={handleUsername}
              type="text"
              id="account"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入使用者名稱 ( 暱稱 )"
            />
          </label>
          <label htmlFor="email" className="flex w-full items-center gap-2">
            <span className="w-24 shrink-0 tracking-widest">Email</span>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入信箱 ( 將作為登入帳號 )"
            />
          </label>
          <label
            htmlFor="setPassword"
            className="flex w-full items-center gap-2"
          >
            <span className="w-24 shrink-0 tracking-widest">密碼</span>
            <input
              onChange={handlePassword}
              type="password"
              id="setPassword"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入密碼"
            />
          </label>
          <label
            htmlFor="confirmPassword"
            className="flex w-full items-center gap-2"
          >
            <span className="w-24 shrink-0 tracking-widest">確認密碼</span>
            <input
              onChange={handlePasswordCheck}
              type="password"
              id="confirmPassword"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請再次輸入密碼"
            />
          </label>
        </form>
        {/* 錯誤訊息 */}
        {message && (
          <div className="flex items-center justify-center">
            <p className="text-lg text-[#FFCC66]">{message}</p>
          </div>
        )}

        {/* <!-- 註冊按鈕 --> */}
        <button
          onClick={handleRegister}
          className="w-1/12 rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-lg font-bold tracking-[.2rem] text-white hover:bg-[#05abff] duration-300"
        >
          註冊會員
        </button>
      </div>
    </main>
  );
};

export default MemberSign;
