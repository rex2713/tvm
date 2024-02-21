import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from "../../services/team-service";
import AuthService from "../../services/auth-service";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const TeamManage = () => {
  const navigate = useNavigate();

  const user = AuthService.getCurrentUser();
  const id = user.user._id;
  const [userTeamsData, setUserTeamsData] = useState([]);
  const [fakeReload, setFakeReload] = useState(false);

  useEffect(() => {
    const getTeams = async (id) => {
      try {
        const userTeams = await TeamService.getUserTeams(id);
        //將隊伍資料排序
        const sortedTeams = userTeams.data.sort((a, b) =>
          a._id.localeCompare(b._id),
        );
        setUserTeamsData(sortedTeams);
      } catch (error) {
        console.error("Error fetching user teams:", error);
      }
    };
    getTeams(id);
  }, [fakeReload]);

  return (
    <main className="flex w-full flex-col gap-14 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-52 py-10">
      {/* 隊伍資訊-已展開 */}
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
                    <Link
                      to={"/team/teamInfo/" + team._id}
                      // type="button"
                      id="Coconut Team"
                      // value={"詳細內容"}
                      className="w-2/5 cursor-pointer rounded-full border border-white/50 bg-white/10 py-1 text-base font-medium tracking-[.2rem] text-white duration-500 hover:bg-[#0492D9]"
                    >
                      詳細資訊
                    </Link>
                  </div>

                  {/* 隊長卡片 */}
                  <div className="flex w-full gap-2">
                    <button className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50">
                      <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                        <img
                          className="w-1/2 rounded-full bg-white bg-clip-border"
                          src={team.teamLeader.photoSelected}
                          alt=""
                        />
                        <div className="flex flex-col items-center justify-center gap-1">
                          <p className="text-base font-bold tracking-wide">
                            {team.teamLeader.username}
                          </p>
                          {team.teamLeader.goodAtPosition &&
                            team.teamLeader.goodAtPosition.length !== 0 &&
                            team.teamLeader.goodAtPosition.map((position) => {
                              return (
                                <p
                                  key={uuidv4()}
                                  className="text-sm tracking-widest text-white/70"
                                >
                                  {position}
                                </p>
                              );
                            })}
                          <p className="text-sm tracking-widest text-white/70">
                            {team.teamLeader.skillLevel}
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* 隊員卡片 */}
                  {team.teamMember &&
                    team.teamMember.length !== 0 &&
                    team.teamMember.map((member) => {
                      return (
                        <div key={member._id} className="flex w-full gap-2">
                          <button
                            onClick={() => {
                              handleDelete(member._id, team._id);
                            }}
                            className="group relative h-52 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50"
                          >
                            {/* 刪除按鈕 */}
                            {/* {team.teamLeader._id === user.user._id && (
                              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                                -
                              </div>
                            )} */}
                            <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                              <img
                                className="w-1/2 rounded-full bg-white bg-clip-border"
                                src={member.photoSelected}
                                alt=""
                              />
                              <div className="flex flex-col items-center justify-center gap-1">
                                <p className="text-base font-bold tracking-wide">
                                  {member.username}
                                </p>
                                {member.goodAtPosition &&
                                  member.goodAtPosition.length !== 0 &&
                                  member.goodAtPosition.map((position) => {
                                    return (
                                      <p
                                        key={uuidv4()}
                                        className="text-sm tracking-widest text-white/70"
                                      >
                                        {position}
                                      </p>
                                    );
                                  })}

                                <p className="text-sm tracking-widest text-white/70">
                                  {member.skillLevel}
                                </p>
                              </div>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  {/* 加入隊友 */}
                  {/* {team.teamMember.length < 5 && (
                    <label
                      htmlFor="seek"
                      className="group flex h-52 w-full flex-col items-center justify-center gap-2 rounded-lg border border-transparent bg-black/30 pb-6 duration-500 hover:border-white/50"
                    >
                      <p className="text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                        +
                      </p>
                    </label>
                  )} */}
                </section>
              </label>
            </div>
          );
        })}
    </main>
  );
};
//保留徵求隊友資料
{
  /* <select
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
</select>; */
}
export default TeamManage;
