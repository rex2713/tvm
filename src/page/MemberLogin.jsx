import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Swal from "sweetalert2";

const MemberLogin = () => {
  const navigate = useNavigate();
  //使用useOutletContext來同步isLogIn狀態
  const outlet = useOutletContext();
  const { isLogIn, setIsLogIn } = outlet;
  console.log(isLogIn);

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
    //取消表單預設行為
    e.preventDefault();
    try {
      let response = await AuthService.login(email, password);
      // console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      setIsLogIn(true);
      Swal.fire({
        title: "登入成功",
        // text: "現在將為您導向個人資料頁面",
        icon: "success",
        background: "#123659",
        color: "#FFFFFF",
        confirmButtonColor: "#0492D9",
      });
      navigate("/member/Info");
    } catch (e) {
      // console.log(e);
      setMessage(e.response.data);
    }
  };

  return (
    <main className="relative flex lg:h-[60vh] h-[100vh] w-full bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000]">
      {/* <!-- 登入表單 --> */}
      <div className="absolute top-20 flex h-full w-full flex-col items-center gap-4 ">
        <form
          action=""
          className="flex lg:h-1/2 h-1/4 xl:w-2/5 md:w-1/2 w-3/4 flex-col items-center justify-center gap-12 rounded-3xl bg-[#123659] xl:px-20 px-10 text-white "
        >
          {/* <!-- 帳密輸入 --> */}
          <label htmlFor="account" className="flex w-full items-center gap-2">
            <span className="w-20 shrink-0 tracking-widest">Email</span>
            <input
              onChange={handleEmail}
              type="text"
              id="email"
              className="h-8 w-full rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入信箱"
            />
          </label>
          <label htmlFor="password" className="flex w-full items-center gap-2">
            <span className="w-20 shrink-0 tracking-widest">密碼</span>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              className="h-8 w-full rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入至少6位數密碼"
            />
          </label>
        </form>
        {/* 錯誤訊息 */}
        {message ? (
          <div className="flex h-5 items-center justify-center">
            <p className="text-lg text-[#FFCC66]">{message}</p>
          </div>
        ) : (
          <div className="h-5"></div>
        )}
        {/* <!-- 登入按鈕 --> */}
        <button
          onClick={handleLogin}
          className="lg:w-1/12 w-1/6 rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-lg font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
        >
          登入
        </button>
      </div>
    </main>
  );
};

export default MemberLogin;
