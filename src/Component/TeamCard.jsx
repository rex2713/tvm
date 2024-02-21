import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import "../css/SweepLight.css";
import TeamService from "../../services/team-service";
import AuthService from "../../services/auth-service";
import { v4 as uuidv4 } from "uuid";

const TeamCard = () => {
  //取出所有隊伍資料
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    TeamService.getAllTeam()
      .then((data) => {
        setTeamData(data.data);
        // console.log(data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  //取得user資料
  const user = AuthService.getCurrentUser();

  const handleTeamJoin = (e) => {
    console.log(user.user._id);
    console.log(e.currentTarget.dataset.teamid);

    TeamService.teamJoin(e.currentTarget.dataset.teamid, user.user._id)
      .then(() => {
        window.alert("加入隊伍成功");
        TeamService.getAllTeam()
          .then((data) => {
            setTeamData(data.data);
            console.log(data.data);
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
        window.alert(e.response.data);
      });
  };

  return (
    // <div className="no-scrollbar flex w-full items-start justify-start gap-10 overflow-x-auto">
    <div className="grid w-full grid-cols-3 items-start justify-items-center gap-y-10 2xl:grid-cols-4">
      {teamData &&
        teamData.length !== 0 &&
        Array.isArray(teamData) &&
        teamData.map((team) => {
          // console.log(team.court.courtName);

          // if (team.court.courtName != "臺北教育大學") return;
          return (
            <div
              key={uuidv4()}
              className="flex h-[340px] md:h-[440px] xl:h-[480px] w-[220px] md:w-[340px] xl:w-[380px] 2xl:w-[340px] shrink-0 flex-col items-center justify-between gap-1 sm:gap-4 rounded-3xl border border-transparent bg-[#123659] p-2 sm:p-4 shadow-sm duration-500 hover:border-white/30"
            >
              {/* 隊伍基本資訊 */}
              <div className="flex flex-col md:gap-2 gap-0">
                <h3 className="whitespace-nowrap text-center text-base sm:text-xl lg:text-2xl font-bold  tracking-widest text-white">
                  {team.court.courtName}
                </h3>
                <h2 className="whitespace-nowrap text-center text-sm md:tex-base lg:text-xl font-bold  tracking-wider text-[#FFE8A3]">
                  {team.date}
                </h2>
              </div>
              <div className="flex w-4/5 items-center justify-center whitespace-nowrap border-t border-white/30 px-4 sm:pt-2 text-base sm:text-xl lg:text-2xl font-bold leading-8 tracking-wider text-white/70">
                {team.teamName}
              </div>
              {/* 球員名單 */}
              <div className="grid xl:h-[300px] md:h-[260px] h-[200px] w-full grid-cols-3 gap-x-1 md:gap-x-2 gap-y-2">
                {/* 隊長資料 */}
                <div className="flex xl:h-[145px] md:h-[130px] h-[95px] w-full flex-col items-center justify-center gap-1 rounded-lg md:rounded-2xl bg-black/20 p-2">
                  <div className="flex w-full flex-col items-center justify-center gap-1">
                    <img
                      loading="lazy"
                      src={team.teamLeader.photoSelected}
                      className="xl:h-14 md:h-10 h-6 xl:w-14 md:w-10 w-6 shrink-0 rounded-full bg-white bg-clip-border outline outline-1 md:outline-2 outline-offset-2 outline-[#FFCC66]"
                    />
                    <p className="h-5 w-full whitespace-nowrap text-center text-sm tracking-wide text-white">
                      {team.teamLeader.username}
                    </p>
                  </div>
                  <div className="flex w-3/5 flex-col items-center justify-center gap-1 font-medium tracking-wide text-white/70">
                    <div className="flex h-2 md:h-4 w-full items-center justify-center">
                      <Swiper
                        loop={false}
                        speed={500}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper sweepLight flex h-full w-full justify-center "
                      >
                        {team.teamLeader &&
                          team.teamLeader.goodAtPosition.map((position) => {
                            return (
                              <SwiperSlide
                                key={uuidv4()}
                                className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-[.6rem] md:text-xs font-medium tracking-widest md:tracking-wide"
                              >
                                {position}
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </div>
                    <p className="h-2 md:h-4 whitespace-nowrap text-[.6rem] md:text-xs font-medium tracking-widest md:tracking-wide">
                      {team.teamLeader.skillLevel}
                    </p>
                  </div>
                </div>
                {/* 隊員資料 */}
                {team.teamMember &&
                  team.teamMember.map((member) => {
                    return (
                      <div
                        key={uuidv4()}
                        className="flex xl:h-[145px] md:h-[130px] h-[95px] w-full flex-col items-center justify-center gap-1 rounded-lg md:rounded-2xl bg-black/20 p-2"
                      >
                        <div className="flex w-full flex-col items-center justify-center gap-1">
                          <img
                            loading="lazy"
                            src={member.photoSelected}
                            className="xl:h-14 md:h-10 h-6 xl:w-14 md:w-10 w-6 shrink-0 rounded-full bg-white/10 bg-clip-border"
                          />
                          <p className="h-5 w-full whitespace-nowrap text-center text-sm tracking-wide text-white">
                            {member.username}
                          </p>
                        </div>
                        <div className="flex w-3/5 flex-col items-center justify-center gap-1 font-medium tracking-wide text-white/70">
                          <div className="flex h-2 md:h-4 w-full items-center justify-center">
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
                                      className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-[.6rem] md:text-xs font-medium tracking-widest md:tracking-wide"
                                    >
                                      {position}
                                    </SwiperSlide>
                                  );
                                })}
                            </Swiper>
                          </div>
                          <p className="h-2 md:h-4 whitespace-nowrap text-[.6rem] md:text-xs font-medium tracking-widest md:tracking-wide">
                            {member.skillLevel}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                {/* 加入隊伍 */}
                {team.teamMember.length < 5 && (
                  <button
                    data-teamid={team._id}
                    onClick={handleTeamJoin}
                    className="group relative flex xl:h-[145px] md:h-[130px] h-[95px] w-full flex-col items-center gap-1 rounded-lg md:rounded-2xl border border-transparent bg-black/10 p-2 duration-500 hover:border-white/30 hover:bg-black/20"
                  >
                    <div className="absolute top-3 xl:top-4 whitespace-nowrap text-center text-xs md:text-sm xl:text-base font-medium leading-6 tracking-wider text-white/30 duration-500 group-hover:text-white">
                      加入隊伍
                    </div>
                    <p className="absolute top-6 md:top-10 text-4xl md:text-5xl lg:text-6xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66]">
                      +
                    </p>
                  </button>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TeamCard;
