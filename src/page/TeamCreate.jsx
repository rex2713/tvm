import React from "react";
import TeamCard from "../Component/TeamCard";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth-service";
import TeamService from "../../services/team-service";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import "../css/SweepLight.css";
import { v4 as uuidv4 } from "uuid";

const TeamCreate = () => {
  const navigate = useNavigate();
  //取得日期
  const today = new Date().toISOString().split("T")[0];
  //處理日期格式
  const todayFix = today.split("-")[1] + "/" + today.split("-")[2];

  const [teamName, setTeamName] = useState("隊伍名稱");
  const [court, setCourt] = useState("場地名稱");
  const [date, setDate] = useState(todayFix);
  const [teamLeader, setTeamLeader] = useState("");
  const [friend, setFriend] = useState("");
  const [teamMember, setTeamMember] = useState([]);
  const [email, setEmail] = useState("");
  const [radomTenUsers, setRadomTenUsers] = useState([]);

  const user = AuthService.getCurrentUser();
  useEffect(() => {
    async function getData() {
      const response = await TeamService.getRadomTenUsers();
      setRadomTenUsers(response.data);
    }
    getData();
  }, []);

  const handleTeamName = (e) => {
    // console.log(e.target.value);
    setTeamName(e.target.value);
  };
  const handleCourt = (e) => {
    // console.log(e.target.value);
    setCourt(e.target.value);
  };
  const handleDate = (e) => {
    // console.log(e.target.value);
    let date =
      e.target.value.split("-")[1] + "/" + e.target.value.split("-")[2];
    setDate(date);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  //處理加入指定隊友按鈕
  const handleFriend = (e) => {
    e.preventDefault();
    TeamService.getUserByEmail(email)
      .then((data) => {
        if (
          teamMember
            .map((member) => {
              return member._id;
            })
            .includes(data.data._id)
        ) {
          window.alert("此隊友已在隊伍中");
        } else if (teamMember.length >= 5) {
          window.alert("此隊伍已滿員");
        } else if (email == "") {
          window.alert("信箱不能為空");
        } else {
          if (data.data == "") {
            window.alert("找不到此用戶");
          } else {
            setTeamMember([...teamMember, data.data]);
          }
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //刪除隊友按鈕
  const handleDelete = (e) => {
    let id = e.target.id;
    const teamMemberUpdate = teamMember.filter((member) => {
      return member._id !== id;
    });
    setTeamMember(teamMemberUpdate);
  };

  //處理加入隨機隊友
  const handleRadomUser = (radomUser) => {
    if (
      teamMember
        .map((member) => {
          return member._id;
        })
        .includes(radomUser._id)
    ) {
      window.alert("此隊友已在隊伍中");
    } else if (teamMember.length >= 5) {
      window.alert("此隊伍已滿員");
    } else {
      setTeamMember([...teamMember, radomUser]);
      setRadomTenUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== radomUser._id),
      );
    }
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
                onChange={handleEmail}
                type="text"
                id="teammate"
                className="h-8 w-full shrink rounded-md border border-white/30 bg-white/20 px-4 text-white placeholder:text-white/50 focus:bg-white/90 focus:text-black/90"
                placeholder="請輸入隊員信箱"
              />
              <button onClick={handleFriend}>加入</button>
              <div className="flex w-full flex-col gap-2">
                <p className="text-white/70">隨機加入隊友</p>
                <div className="no-scrollbar flex w-full justify-start gap-[1vw] overflow-x-auto">
                  {/* 隨機十位使用者資料 */}
                  {radomTenUsers &&
                    radomTenUsers.map((radomUser) => {
                      return (
                        <label
                          key={uuidv4()}
                          htmlFor={radomUser._id}
                          className=""
                        >
                          <input
                            id={radomUser._id}
                            onChange={() => {
                              handleRadomUser(radomUser);
                            }}
                            type="checkbox"
                            className="peer hidden"
                          ></input>
                          <div className=" flex h-48 w-40 flex-col items-center justify-center gap-4 rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 peer-checked:bg-[#FCA311]">
                            <img
                              className="w-1/2 rounded-full bg-white bg-clip-border"
                              src={radomUser.photoSelected}
                              alt=""
                            />
                            <div className="flex flex-col items-center justify-center gap-1">
                              <p className="text-lg font-bold tracking-widest">
                                {radomUser.username}
                              </p>
                              <p className="text-sm tracking-widest text-white/70">
                                {radomUser.goodAtPosition.map((position) => {
                                  return (
                                    <span key={uuidv4()}>{position} </span>
                                  );
                                })}
                              </p>
                              <p className="text-sm tracking-widest text-white/70">
                                {radomUser.skillLevel}
                              </p>
                            </div>
                          </div>
                        </label>
                      );
                    })}
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
        <div
          key={uuidv4()}
          className="flex w-[380px] shrink-0 flex-col items-center justify-center gap-4 rounded-3xl border border-transparent bg-[#123659] p-4 shadow-sm duration-500 hover:border-white/30"
        >
          {/* 隊伍基本資訊 */}
          <div>
            <h3 className="whitespace-nowrap text-center text-2xl font-bold leading-10 tracking-widest text-white">
              {court}
            </h3>
            <h2 className="whitespace-nowrap text-center text-xl font-bold leading-8 tracking-wider text-[#FFE8A3]">
              {date}
            </h2>
          </div>
          <div className="flex w-4/5 items-center justify-center whitespace-nowrap border-t border-white/30 px-4 py-2 text-2xl font-bold leading-8 tracking-wider text-white/70">
            {teamName}
          </div>
          {/* 球員名單 */}
          <div className="grid w-full grid-cols-3 items-center justify-between gap-x-2 gap-y-2">
            {/* 隊長資料 */}
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-2xl bg-black/20 p-2">
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <img
                  loading="lazy"
                  src={user.user.photoSelected}
                  className="h-14 w-14  rounded-full bg-white bg-clip-border outline outline-2 outline-offset-2 outline-[#FFCC66]"
                />
                <p className="w-full whitespace-nowrap text-center text-sm tracking-wide text-white">
                  {user.user.username}
                </p>
              </div>
              <div className="flex w-2/5 flex-col items-center justify-center gap-1 text-xs font-medium tracking-wide text-white/70">
                <div className="flex w-full items-center justify-center">
                  <Swiper
                    loop={false}
                    speed={500}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper sweepLight flex h-full w-full justify-center "
                  >
                    {user &&
                      user.user.goodAtPosition.map((position) => {
                        return (
                          <SwiperSlide
                            key={uuidv4()}
                            className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-xs font-medium tracking-wide "
                          >
                            {position}
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
                <p className="whitespace-nowrap">{user.user.skillLevel}</p>
              </div>
            </div>
            {/* 隊員資料 */}
            {teamMember &&
              teamMember.length > 0 &&
              teamMember.map((member) => {
                return (
                  <div
                    key={uuidv4()}
                    className="relative flex w-full flex-col items-center justify-center gap-1 rounded-2xl bg-black/20 p-2"
                  >
                    <button
                      id={member._id}
                      onClick={handleDelete}
                      className="absolute right-1 top-1 h-5 w-5 rounded-full bg-gray-500 text-white"
                    >
                      -
                    </button>
                    <div className="flex w-full flex-col items-center justify-center gap-1">
                      <img
                        loading="lazy"
                        src={member.photoSelected}
                        className="h-14 w-14  rounded-full bg-white bg-clip-border"
                      />
                      <p className="w-full whitespace-nowrap text-center text-sm tracking-wide text-white">
                        {member.username}
                      </p>
                    </div>
                    <div className="flex w-2/5 flex-col items-center justify-center gap-1 text-xs font-medium tracking-wide text-white/70">
                      <div className="flex w-full items-center justify-center">
                        <Swiper
                          loop={false}
                          speed={500}
                          centeredSlides={true}
                          autoplay={{
                            delay: 3050,
                            disableOnInteraction: false,
                          }}
                          modules={[Autoplay]}
                          className="mySwiper flex h-full w-full justify-center "
                        >
                          {member.goodAtPosition &&
                            member.goodAtPosition.map((position) => {
                              return (
                                <SwiperSlide
                                  key={uuidv4()}
                                  className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-xs font-medium tracking-wide "
                                >
                                  {position}
                                </SwiperSlide>
                              );
                            })}
                        </Swiper>
                      </div>
                      <p className="whitespace-nowrap">{member.skillLevel}</p>
                    </div>
                  </div>
                );
              })}
            {/* 加入隊伍 */}
            {teamMember.length < 5 && (
              <button
                // data-teamid={team._id}
                // onClick={handleTeamJoin}
                className="group relative flex h-full w-full flex-col items-center gap-1 rounded-2xl border border-transparent bg-black/10 p-2 duration-500 hover:border-white/30 hover:bg-black/20"
              >
                <div className="absolute top-4 whitespace-nowrap text-center text-base font-medium leading-6 tracking-wider text-white/70 duration-500 group-hover:text-white">
                  加入隊伍
                </div>
                <p className="absolute top-8 text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                  +
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamCreate;
