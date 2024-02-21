import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  FreeMode,
  Pagination,
  Navigation,
  Keyboard,
  EffectCoverflow,
} from "swiper/modules";
import "../css/swiper.css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamService from "../../services/team-service";
import AuthService from "../../services/auth-service";

const TeamInfo = () => {
  const [teamData, setTeamData] = useState();
  // const [leaderData, setLeaderData] = useState();
  const [memberData, setMemberData] = useState();
  const [editTeamName, setEditTeamName] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const params = useParams();
  const user = AuthService.getCurrentUser();
  const [isLeader, setIsLeader] = useState(false);

  let { _id } = params;
  // console.log(_id);
  useEffect(() => {
    const fetchTeamInfo = async () => {
      try {
        const teamFound = await TeamService.teamGetInfo(_id);
        setTeamData(teamFound.data);
        setMemberData(teamFound.data.teamMember);
        if (teamFound.data) {
          if (user.user._id == teamFound.data.teamLeader._id) setIsLeader(true);
          // console.log(isLeader);
        }
      } catch (error) {
        console.error("Error fetching team info:", error);
      }
    };
    fetchTeamInfo(_id);
  }, []);

  const handleJoinTeam = async () => {
    // console.log(isLeader);
    const userEmail = window.prompt("請輸入好友信箱：");
    // console.log(userInput);
    if (userEmail === "") return window.alert("信箱不能為空");
    try {
      let userFound = await TeamService.getUserByEmail(userEmail)
        .then((data) => {
          if (
            teamData.teamMember
              .map((member) => {
                return member._id;
              })
              .includes(data.data._id)
          ) {
            window.alert("此隊友已在隊伍中");
          } else if (teamData.teamMember.length >= 5) {
            window.alert("此隊伍已滿員");
          } else if (userEmail == "") {
            window.alert("信箱不能為空");
          } else if (teamData.teamLeader._id == data.data._id) {
            window.alert("此用戶已是隊伍的隊長");
          } else {
            if (data.data == "") {
              window.alert("找不到此用戶");
            } else {
              setMemberData([...memberData, data.data]);
              TeamService.teamAdd(data.data._id, teamData._id);
            }
          }
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const handleTeamEdit = () => {
    setEditTeamName(true);
  };
  const handleSaveTeamName = () => {
    setEditTeamName(false);
    teamData.teamName = newTeamName;
  };

  const handleNewTeamName = (e) => {
    setNewTeamName(e.target.value);
  };

  //  刪除隊友｜｜退出隊伍
  const handleDelete = async (member_id, team_id) => {
    const confirm = window.confirm("確定要刪除隊友嗎？");
    if (confirm) {
      await TeamService.teamLeave(member_id, team_id);
      setMemberData(memberData.filter((person) => person._id !== member_id));
    }
    return;
  };

  //刪除隊伍
  const handleDeleteTeam = async () => {
    const confirm = window.confirm("確定要刪除隊伍嗎？（刪除後將無法復原）");
    if (confirm) {
      // console.log(teamData);
      let court_id = teamData.court._id;
      let team_id = teamData._id;
      let user_ids = [];
      let member_ids = teamData.teamMember.map((member) => {
        return member._id;
      });
      user_ids = [...member_ids, teamData.teamLeader._id];
      // console.log(user_ids);
      // console.log(team_id);
      // console.log(court_id);
      await TeamService.teamDelete(user_ids, team_id, court_id);
    }
  };

  return (
    <main className="flex w-full bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-40 py-10">
      {/* 球場內容 */}
      {teamData && (
        <div className="flex w-[80vw] flex-col items-center justify-center gap-20 rounded-t-3xl bg-[#082A4D] px-[2vw] py-8">
          <section className="flex h-full w-full gap-[5vw] px-10">
            {/* 資訊 */}
            <article className="flex w-1/2 flex-col justify-between gap-8">
              {/* 球場標題 */}
              <div className="flex items-center gap-4">
                {editTeamName ? (
                  <input
                    onChange={handleNewTeamName}
                    autoFocus
                    placeholder={teamData.teamName}
                    className="bg-transparent text-4xl font-black  tracking-wider text-[#FFCC66] placeholder:text-[#FFCC66]"
                  ></input>
                ) : (
                  <h3 className="text-4xl font-black tracking-wider text-[#FFCC66]">
                    {teamData.teamName}
                  </h3>
                )}
                {editTeamName ? (
                  <button className="text-white" onClick={handleSaveTeamName}>
                    完成
                  </button>
                ) : (
                  isLeader && (
                    <figure className="my-auto flex items-center">
                      <img
                        onClick={handleTeamEdit}
                        className="h-8 w-8 cursor-pointer opacity-20 duration-500 hover:opacity-60"
                        src="/pic/edit.svg"
                        alt=""
                      />
                    </figure>
                  )
                )}
              </div>
              {/* 詳細資訊 */}
              <div className="flex flex-col gap-4">
                <div className="flex text-xl tracking-widest text-white/70">
                  <p className="w-[3rem] text-base">球場</p>
                  <p className="font-bold">{teamData.court.courtName}</p>
                </div>
                <div className="flex text-xl tracking-wider text-white/70">
                  <p className="w-[3rem] text-base">日期</p>
                  <p className="font-bold">{teamData.date}</p>
                </div>
              </div>
              {/* 公告欄 */}
              <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-2 font-bold text-white/70 duration-500 hover:border-white/20">
                <p className="my-2 w-full text-center text-xl tracking-widest">
                  公告
                </p>
                <div className="no-scrollbar flex h-full w-full flex-col gap-1 overflow-scroll">
                  <div className="flex items-start gap-4">
                    <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                      2023.12.4 15:23
                    </p>
                    <p className="text-base tracking-widest">大家自己帶裝備</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                      2023.12.6 18:00
                    </p>
                    <p className="text-base tracking-widest">六點半門口見!</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    className="h-6 w-5/6 rounded-lg bg-white/10 px-2 focus:bg-white/80 focus:text-black"
                  />
                  <input
                    type="submit"
                    className="h-6 w-1/6 rounded-lg bg-white/10 text-white/50 duration-500 hover:bg-white/20"
                    value={"送出公告"}
                  />
                </div>
              </div>
            </article>

            <div className="grid h-full w-1/2 grid-cols-3 items-center justify-items-center gap-x-4 gap-y-4 text-white">
              {/* 隊長 */}
              <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                  <img
                    className="w-1/3 rounded-full bg-white bg-clip-border outline outline-2 outline-offset-4 outline-[#FFCC66]"
                    src={teamData.teamLeader.photoSelected}
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-base font-bold tracking-wide">
                      {teamData.teamLeader.username}
                    </p>
                    <p className="text-sm tracking-widest text-white/70">
                      {teamData.teamLeader.goodAtPosition &&
                        teamData.teamLeader.goodAtPosition}
                    </p>
                    <p className="text-sm tracking-widest text-white/70">
                      {teamData.teamLeader.skillLevel &&
                        teamData.teamLeader.skillLevel}
                    </p>
                  </div>
                </div>
              </button>

              {/* 隊員 */}
              {memberData &&
                memberData.length > 0 &&
                memberData.map((member) => {
                  return (
                    <button
                      key={member._id}
                      className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50"
                    >
                      {isLeader && (
                        <div
                          onClick={() => {
                            handleDelete(member._id, teamData._id);
                          }}
                          className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50"
                        >
                          -
                        </div>
                      )}
                      <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                        <img
                          className="w-1/3 rounded-full bg-white bg-clip-border "
                          src={member.photoSelected}
                          alt=""
                        />
                        <div className="flex flex-col items-center justify-center gap-1">
                          <p className="text-base font-bold tracking-wide">
                            {member.username}
                          </p>
                          <div className="text-sm tracking-widest text-white/70">
                            {member.goodAtPosition && member.goodAtPosition}
                          </div>
                          <p className="text-sm tracking-widest text-white/70">
                            {member.skillLevel && member.skillLevel}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}

              {/* <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                  -
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                  <img
                    className="w-1/3 rounded-full bg-white bg-clip-border"
                    src="/pic/icon/member/men6.png"
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-base font-bold tracking-wide">
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



              <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                  -
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                  <img
                    className="w-1/3 rounded-full bg-white bg-clip-border"
                    src="/pic/icon/member/men1.png"
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-base font-bold tracking-wide">
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

              <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                  -
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                  <img
                    className="w-1/3 rounded-full bg-white bg-clip-border"
                    src="/pic/icon/member/girl4.png"
                    alt=""
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-base font-bold tracking-wide">
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
              </button> */}
              {isLeader && memberData && memberData.length < 5 && (
                <label
                  onClick={handleJoinTeam}
                  htmlFor="seek"
                  className="group flex h-52 w-full flex-col items-center justify-center gap-2 rounded-lg border border-transparent bg-black/30 pb-6 duration-500 hover:border-white/50"
                >
                  <p className="text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                    +
                  </p>
                </label>
              )}

              {/* <select
                  name=""
                  id="seek"
                  className="h-8 w-2/3 shrink cursor-pointer rounded-md border border-white/20 bg-white/10 px-4 text-center text-base text-white/70 duration-300 focus:bg-white/90 focus:text-black/90 group-hover:bg-white/20"
                >
                  <option value="" disabled>
                    選擇徵選對象
                  </option>
                  <option value="主攻">主攻</option>
                  <option value="攔中">攔中</option>
                  <option value="副攻">副攻</option>
                  <option value="舉球">舉球</option>
                  <option value="自由">自由</option>
                </select> */}
            </div>
          </section>

          {/* 場地評論 */}
          <section className="flex w-full flex-col items-center justify-center gap-5 px-10">
            <h3 className="text-2xl font-bold text-[#FFCC66]">留言板</h3>
            <div className="flex h-80 w-full flex-col justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 font-bold duration-500 hover:border-white/20">
              <div className="no-scrollbar flex flex-col gap-1 overflow-scroll text-base">
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:23
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生1
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    幾點在球場集合?
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:36
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生2
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    看大家意見
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:37
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生5
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    我六點半才會到
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:38
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生1
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    那我們就約六點半門口見嗎?
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:40
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生2
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    沒問題
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:41
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生4
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    好喔~
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:41
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生3
                  </p>
                  <p className="text-base tracking-widest text-white/70">收</p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:42
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生1
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    球具各自帶喔
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.4 15:45
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生4
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    收到
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.9 21:30
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生2
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    明天有人要我幫買晚餐嗎
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.9 21:30
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生1
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    我要
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.9 21:31
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生1
                  </p>
                  <p className="text-base tracking-widest text-white/70">
                    隨意買個飯糰，感謝
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    2023.12.9 21:32
                  </p>
                  <p className="whitespace-nowrap text-sm leading-6 tracking-wider text-white/50">
                    北商學生2
                  </p>
                  <p className="text-base tracking-widest text-white/70">收</p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  className="h-6 w-11/12 rounded-lg bg-white/10 px-2 focus:bg-white/80 focus:text-black"
                />
                <input
                  type="submit"
                  className="h-6 w-1/12 rounded-lg bg-white/10 text-white/50 duration-500 hover:bg-white/20"
                  value={"送出訊息"}
                />
              </div>
            </div>
          </section>
          {isLeader && (
            <button onClick={handleDeleteTeam} className="text-3xl text-white">
              刪除隊伍
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default TeamInfo;
