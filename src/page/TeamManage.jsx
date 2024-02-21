import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from "../../services/team-service";
import AuthService from "../../services/auth-service";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "../css/SweepLight.css";

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
    <main className="flex w-full flex-col gap-6 bg-gradient-to-b from-[#082A4D] via-[#041526] to-[#000000] px-[10vw] py-10 sm:gap-10 xl:gap-14">
      {/* 隊伍資訊-已展開 */}
      {userTeamsData &&
        userTeamsData.length > 0 &&
        userTeamsData.map((team) => {
          return (
            <div key={team._id} className="flex flex-col gap-1 sm:gap-2">
              {/* title */}
              <div className="flex items-center gap-4 px-6">
                <h3 className="text-2xl font-black tracking-wider text-[#FFCC66] sm:text-4xl">
                  {team.teamName}
                </h3>
              </div>

              <label
                htmlFor={team._id}
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                <section className="flex w-full flex-col gap-4 rounded-xl border border-transparent bg-[#123659] px-[3vw] py-2 text-white duration-500 hover:border-white/20 sm:rounded-3xl sm:py-6 xl:flex-row">
                  {/* 內容 */}
                  <div className="flex w-full flex-row items-start justify-between gap-2 py-2 xl:w-2/6 xl:flex-col">
                    <div className="flex h-full flex-col gap-1 text-base font-black tracking-wider sm:gap-4 sm:text-xl">
                      <div className="flex w-full items-center gap-2">
                        <p className="shrink-0 text-xs tracking-widest text-white/70 sm:text-base">
                          球場
                        </p>
                        <p className="w-4/5 flex-wrap">
                          {team.court.courtName}
                        </p>
                      </div>
                      <div className="flex w-full items-center gap-2">
                        <p className="shrink-0 text-xs tracking-widest text-white/70 sm:text-base">
                          日期
                        </p>
                        <p className="w-full flex-wrap">{team.date}</p>
                      </div>
                    </div>
                    <Link
                      to={"/team/teamInfo/" + team._id}
                      // type="button"
                      id={team._id}
                      // value={"詳細內容"}
                      className="w-1/4 cursor-pointer rounded-lg border border-white/50 bg-white/10 px-2 py-1 text-center text-xs font-medium tracking-[.2rem] text-white duration-500 hover:bg-[#0492D9] sm:rounded-full sm:px-0 sm:text-base md:w-1/5 xl:w-2/5"
                    >
                      詳細資訊
                    </Link>
                  </div>

                  <div className="grid w-full grid-cols-3 gap-2 sm:grid-cols-6 xl:w-4/6">
                    {/* 隊長卡片 */}
                    <div className="flex w-full gap-2">
                      <button className="group relative h-36 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 md:h-[152px] lg:h-44 2xl:h-48">
                        <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                          <img
                            className="h-10 w-10 rounded-full bg-white/10 bg-clip-border object-cover outline outline-1 outline-offset-2 outline-[#FFCC66] md:h-12 md:w-12 md:outline-2 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
                            src={team.teamLeader.photoSelected}
                            alt=""
                          />
                          <div className="flex flex-col items-center justify-center gap-1">
                            <p className="text-base font-bold tracking-wide">
                              {team.teamLeader.username}
                            </p>

                            <Swiper
                              loop={true}
                              speed={500}
                              centeredSlides={true}
                              autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                              modules={[Autoplay]}
                              className="mySwiper sweepLight flex h-full w-20 justify-center "
                            >
                              {team.teamLeader &&
                                team.teamLeader.goodAtPosition.map(
                                  (position) => {
                                    return (
                                      <SwiperSlide
                                        key={uuidv4()}
                                        className="sweepLight h-4 w-20 whitespace-nowrap bg-transparent text-[.8rem] font-medium tracking-widest text-white/70 md:text-xs md:tracking-wide lg:text-base"
                                      >
                                        {position}
                                      </SwiperSlide>
                                    );
                                  },
                                )}
                            </Swiper>

                            <p className="text-[.8rem] tracking-widest text-white/70 md:text-xs lg:text-base ">
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
                              className="group relative h-36 w-full rounded-lg border border-transparent bg-black/30 duration-500 hover:border-white/50 md:h-[152px] lg:h-44 2xl:h-48"
                            >
                              {/* 刪除按鈕 */}
                              {/* {team.teamLeader._id === user.user._id && (
                              <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white/20 bg-clip-border text-xl duration-500 group-hover:bg-white/50">
                                -
                              </div>
                            )} */}
                              <div className=" flex h-full w-full flex-col items-center justify-center gap-3">
                                <img
                                  className="h-10 w-10 rounded-full bg-white/10 bg-clip-border object-cover md:h-12 md:w-12 lg:h-16 lg:w-16 2xl:h-20 2xl:w-20"
                                  src={member.photoSelected}
                                  alt=""
                                />
                                <div className="flex flex-col items-center justify-center gap-1">
                                  <p className="text-base font-bold tracking-wide">
                                    {member.username}
                                  </p>
                                  <Swiper
                                    loop={true}
                                    speed={500}
                                    centeredSlides={true}
                                    autoplay={{
                                      delay: 3050,
                                      disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper flex h-4 w-20 justify-center "
                                  >
                                    {member.goodAtPosition &&
                                      member.goodAtPosition.map((position) => {
                                        return (
                                          <SwiperSlide
                                            key={uuidv4()}
                                            className="sweepLight h-4 w-20 whitespace-nowrap bg-transparent text-[.8rem] font-medium tracking-widest text-white/70 md:text-xs md:tracking-wide lg:text-base"
                                          >
                                            {position}
                                          </SwiperSlide>
                                        );
                                      })}
                                  </Swiper>

                                  <p className="text-[.8rem] md:text-xs lg:text-base tracking-widest text-white/70">
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
                  </div>
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
