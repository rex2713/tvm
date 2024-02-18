import React from "react";
import TeamCard from "../Component/TeamCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";

const TeamCreate = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [court, setCourt] = useState("");
  const [date, setDate] = useState(null);
  const [teamLeader, setTeamLeader] = useState("");
  const [friend, setFriend] = useState("");
  const [teamMember, setTeamMember] = useState([]);

  const user = AuthService.getCurrentUser();

  const handleTeamName = (e) => {
    // console.log(e.target.value);
    setTeamName(e.target.value);
  };
  const handleCourt = (e) => {
    // console.log(e.target.value);
    setCourt(e.target.value);
  };
  const handleDate = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };
  let timer;
  const handleFriend = (e) => {
    clearTimeout(timer);
    console.log(e.target.value);
    timer = setTimeout(() => {
      setFriend(e.target.value);
    }, 1000);
  };

  //處理建立隊伍按鈕
  const handleTeamCreate = (e) => {
    e.preventDefault();
    // console.log(user.user._id);
    setTeamLeader(user.user._id);
  };

  return (
    // padding有調整過
    <main className="flex w-full justify-around bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      {/* 左側創建隊伍表單 */}
      <div className="flex w-3/5 flex-col gap-4">
        <h3 className="w-full text-2xl font-bold text-[#FFCC66]">隊伍資訊</h3>
        <form className="flex flex-col items-center justify-center gap-8 rounded-3xl bg-[#114273] p-10 text-white">
          <label htmlFor="teamName" className="flex w-full items-center gap-2">
            <span className="w-24 shrink-0 tracking-widest">隊伍名稱</span>
            <input
              onChange={handleTeamName}
              type="text"
              id="teamName"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/50 focus:bg-white/90 focus:text-black/90"
              placeholder="請輸入隊伍名稱"
            />
          </label>
          <label
            htmlFor="selectCourt"
            className="flex w-full items-center gap-2"
          >
            <span className="w-24 shrink-0 tracking-widest">選擇球場</span>
            <select
              name=""
              id="selectCourt"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
              onChange={handleCourt}
            >
              <option value="台北商業大學">台北商業大學</option>
              <option value="台北師範大學">台北師範大學</option>
              <option value="台灣大學">台灣大學</option>
              <option value="百齡高中">百齡高中</option>
            </select>
          </label>
          <label htmlFor="date" className="flex w-full items-center gap-2">
            <span className="w-24 shrink-0 tracking-widest">選擇日期</span>
            <input
              onChange={handleDate}
              type="date"
              id="date"
              className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white focus:bg-white/90 focus:text-black/90"
            />
          </label>

          <label
            htmlFor="teammate"
            className="flex w-full justify-between gap-2"
          >
            <span className="w-24 shrink-0 tracking-widest">增加隊員</span>
            <div className="flex w-full flex-col gap-4 overflow-clip">
              <input
                onChange={handleFriend}
                type="text"
                id="teammate"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/50 focus:bg-white/90 focus:text-black/90"
                placeholder="請輸入隊員信箱"
              />
              <div className="flex w-full flex-col gap-2">
                {/* <p className="text-white/70">快速加入好友</p> */}
                <div className="no-scrollbar flex w-full justify-start gap-[1vw] overflow-x-auto">
                  {/* 好友卡片 */}
                  <label htmlFor="friend1" className="">
                    <input
                      type="checkbox"
                      id="friend1"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/girl2.png"
                        alt=""
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-lg font-bold tracking-widest">
                          北商學生1
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          舉球、自由
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          體保
                        </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="friend2" className="">
                    <input
                      type="checkbox"
                      id="friend2"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/men4.png"
                        alt=""
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-lg font-bold tracking-widest">
                          北商學生2
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          主攻
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          校隊
                        </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="friend3" className="">
                    <input
                      type="checkbox"
                      id="friend3"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/girl4.png"
                        alt=""
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-lg font-bold tracking-widest">
                          北商學生3
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          攔中
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          新手
                        </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="friend4" className="">
                    <input
                      type="checkbox"
                      id="friend4"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/men2.png"
                        alt=""
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-lg font-bold tracking-widest">
                          北商學生4
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          攔中
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          新手
                        </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="friend5" className="">
                    <input
                      type="checkbox"
                      id="friend5"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/men1.png"
                        alt=""
                      />
                      <div className="flex flex-col items-center justify-center gap-1">
                        <p className="text-lg font-bold tracking-widest">
                          北商學生5
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          主攻
                        </p>
                        <p className="text-sm tracking-widest text-white/70">
                          系隊
                        </p>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="friend6" className="">
                    <input
                      type="checkbox"
                      id="friend6"
                      className="peer hidden"
                    ></input>
                    <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                      <img
                        className="w-1/2 rounded-full bg-white bg-clip-border"
                        src="/pic/icon/member/girl6.png"
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
                  </label>
                </div>
              </div>
            </div>
          </label>

          {/* <label className="flex w-full justify-between">
            <span className="w-24 shrink-0 tracking-widest">徵求隊員</span>
            <div className="flex w-full flex-wrap gap-4">
              <label htmlFor="spiker">
                <input type="checkbox" id="spiker" className="peer hidden" />
                <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#FCA311]">
                  主攻
                </div>
              </label>
              <label htmlFor="middleBlocker">
                <input
                  type="checkbox"
                  id="middleBlocker"
                  className="peer hidden"
                />
                <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#FCA311]">
                  攔中
                </div>
              </label>
              <label htmlFor="opposite">
                <input type="checkbox" id="opposite" className="peer hidden" />
                <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#FCA311]">
                  副攻
                </div>
              </label>
              <label htmlFor="setter">
                <input type="checkbox" id="setter" className="peer hidden" />
                <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#FCA311]">
                  舉球
                </div>
              </label>
              <label htmlFor="libero">
                <input type="checkbox" id="libero" className="peer hidden" />
                <div className="cursor-pointer rounded-full bg-white/10 px-5 py-1 duration-500 hover:bg-white/30 peer-checked:bg-[#FCA311]">
                  自由
                </div>
              </label>
            </div>
          </label> */}
          {/* 按鈕 */}
          <button
            onClick={handleTeamCreate}
            className="mt-4 w-1/5 rounded-xl border-2 border-white/50 bg-[#0492D9] py-2 text-lg font-bold tracking-[.2rem] text-white duration-300 hover:bg-[#05abff]"
          >
            建立隊伍
          </button>
        </form>
      </div>
      {/* 右側即時預覽 */}
      <div className="flex w-1/4 flex-col items-center gap-4">
        <h3 className="w-full text-2xl font-bold text-[#FFCC66]">即時預覽</h3>
        <TeamCard />
      </div>
    </main>
  );
};

export default TeamCreate;
