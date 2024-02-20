import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from "../../services/team-service";
import AuthService from "../../services/auth-service";

const TeamManage = () => {
  const navigate = useNavigate();
  const handleToTeamInfo = () => {
    navigate("/team/teamInfo");
  };
  const user = AuthService.getCurrentUser();
  const id = user.user._id;
  const [userTeamsData, setUserTeamsData] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const userTeams = await TeamService.getUserTeams(id);
        setUserTeamsData(userTeams.data);
      } catch (error) {
        console.error("Error fetching user teams:", error);
      }
    };
    getTeams(id);
  }, []);

  return (
    <main className="flex w-full flex-col gap-14 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-52 py-10">
      {/* 隊伍資訊-已展開 */}
      {console.log(userTeamsData)}
      {userTeamsData &&
        userTeamsData.length > 0 &&
        userTeamsData.map((team) => {
          return (
            <div key={team._id} className="flex flex-col gap-2">
              {/* title */}
              <div className="flex items-center gap-4 px-6">
                <h3 className="text-4xl font-black tracking-wider text-[#FFCC66]">
                  {team.teamName}
                </h3>
              </div>

              <label
                htmlFor="Coconut Team"
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                <section className="flex w-full rounded-3xl border border-transparent bg-[#123659] px-10 py-6 text-white duration-500 hover:border-white/20">
                  {/* 內容 */}
                  <div className="flex w-2/5 flex-col justify-between py-2">
                    <div className="flex h-full flex-col gap-4 py-2 text-xl font-black tracking-wider">
                      <div className="flex w-full items-center gap-2">
                        <p className="shrink-0 text-base tracking-widest text-white/70">
                          球場
                        </p>
                        <p className="w-4/5 flex-wrap">
                          {team.court.courtName}
                        </p>
                      </div>
                      <div className="flex w-full items-center gap-2">
                        <p className="shrink-0 text-base tracking-widest text-white/70">
                          日期
                        </p>
                        <p className="w-full flex-wrap">{team.date}</p>
                      </div>
                    </div>
                    <input
                      type="button"
                      id="Coconut Team"
                      onClick={handleToTeamInfo}
                      value={"詳細內容"}
                      className="w-2/5 cursor-pointer rounded-full border border-white/50 bg-white/10 py-1 text-base font-medium tracking-[.2rem] text-white duration-500 hover:bg-[#0492D9]"
                    />
                  </div>

                  {/* 隊員卡片 */}
                  <div className="flex w-full gap-2">
                    <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                      <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                        -
                      </div>
                      <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                        <img
                          className="w-1/2 rounded-full bg-white bg-clip-border"
                          src="/pic/icon/member/men3.png"
                          alt=""
                        />
                        <div className="flex flex-col items-center justify-center gap-1">
                          <p className="text-base font-bold tracking-wide">
                            北商學生1
                          </p>
                          <p className="text-sm tracking-widest text-white/70">
                            主攻、副攻
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
                          className="w-1/2 rounded-full bg-white bg-clip-border"
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
                          className="w-1/2 rounded-full bg-white bg-clip-border"
                          src="/pic/icon/member/girl2.png"
                          alt=""
                        />
                        <div className="flex flex-col items-center justify-center gap-1">
                          <p className="text-base font-bold tracking-wide">
                            北商學生3
                          </p>
                          <p className="text-sm tracking-widest text-white/70">
                            舉球、自由
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
                          className="w-1/2 rounded-full bg-white bg-clip-border"
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
                          className="w-1/2 rounded-full bg-white bg-clip-border"
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
                    </button>

                    <label
                      htmlFor="seek"
                      className="group flex h-52 w-full flex-col items-center justify-center gap-2 rounded-lg border border-transparent bg-black/30 pb-6 duration-500 hover:border-white/50"
                    >
                      <p className="text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                        +
                      </p>
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
                    </label>
                  </div>
                </section>
              </label>
            </div>
          );
        })}
    </main>
  );
};

export default TeamManage;
