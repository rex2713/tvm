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
import Swal from "sweetalert2";

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
        // window.alert("加入隊伍成功");
        Swal.fire({
          title: "加入隊伍成功",
          icon: "success",
          background: "#123659",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1500,
        });
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
        // window.alert(e.response.data);
        Swal.fire({
          title: e.response.data,
          icon: "warning",
          background: "#123659",
          color: "#FFFFFF",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    // <div className="no-scrollbar flex w-full items-start justify-start gap-10 overflow-x-auto">
    <div className="grid w-full grid-cols-1 items-start justify-items-center gap-y-10 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {teamData &&
        teamData.length !== 0 &&
        Array.isArray(teamData) &&
        teamData.map((team) => {
          // console.log(team.court.courtName);

          // if (team.court.courtName != "臺北教育大學") return;
          return (
            <div
              key={uuidv4()}
              className="flex h-[340px] w-4/5 shrink-0 flex-col items-center justify-between gap-1 rounded-3xl border border-transparent bg-[#123659] p-2 shadow-sm duration-500 hover:border-white/30 sm:gap-4 sm:p-4 md:h-[440px] md:w-[330px] xl:h-[480px] xl:w-[380px] 2xl:w-[330px]"
            >
              {/* 隊伍基本資訊 */}
              <div className="flex flex-col gap-0 md:gap-2">
                <h3 className="whitespace-nowrap text-center text-base font-bold tracking-widest text-white  sm:text-xl lg:text-2xl">
                  {team.court.courtName}
                </h3>
                <h2 className="md:tex-base whitespace-nowrap text-center text-sm font-bold tracking-wider  text-[#FFE8A3] lg:text-xl">
                  {team.date}
                </h2>
              </div>
              <div className="flex w-4/5 items-center justify-center whitespace-nowrap border-t border-white/30 px-4 text-base font-bold leading-8 tracking-wider text-white/70 sm:pt-2 sm:text-xl lg:text-2xl">
                {team.teamName}
              </div>
              {/* 球員名單 */}
              <div className="grid h-[200px] w-full grid-cols-3 gap-x-1 gap-y-2 md:h-[260px] md:gap-x-2 xl:h-[300px]">
                {/* 隊長資料 */}
                <div className="flex h-[95px] w-full flex-col items-center justify-center gap-1 rounded-lg bg-black/20 p-2 md:h-[130px] md:rounded-2xl xl:h-[145px]">
                  <div className="flex w-full flex-col items-center justify-center gap-1">
                    <img
                      loading="lazy"
                      src={team.teamLeader.photoSelected}
                      className="h-6 w-6 shrink-0 rounded-full bg-white/10 bg-clip-border object-cover outline outline-1 outline-offset-2 outline-[#FFCC66] md:h-10 md:w-10 md:outline-2 xl:h-14 xl:w-14"
                    />
                    <p className="h-5 w-full overflow-clip whitespace-nowrap text-center text-sm tracking-wide text-white">
                      {team.teamLeader.username}
                    </p>
                  </div>
                  <div className="flex w-3/5 flex-col items-center justify-center gap-1 font-medium tracking-wide text-white/70">
                    <div className="flex h-2 w-full items-center justify-center md:h-4">
                      <Swiper
                        loop={true}
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
                                className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-[.6rem] font-medium tracking-widest md:text-xs md:tracking-wide"
                              >
                                {position}
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </div>
                    <p className="h-2 whitespace-nowrap text-[.6rem] font-medium tracking-widest md:h-4 md:text-xs md:tracking-wide">
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
                        className="flex h-[95px] w-full flex-col items-center justify-center gap-1 rounded-lg bg-black/20 p-2 md:h-[130px] md:rounded-2xl xl:h-[145px]"
                      >
                        <div className="flex w-full flex-col items-center justify-center gap-1">
                          <img
                            loading="lazy"
                            src={
                              member.photoSelected
                                ? member.photoSelected
                                : "/pic/icon/member/men1.png"
                            }
                            className="h-6 w-6 shrink-0 rounded-full bg-white/10 bg-clip-border object-cover md:h-10 md:w-10 xl:h-14 xl:w-14"
                          />
                          <p className="h-5 w-full overflow-clip whitespace-nowrap text-center text-sm tracking-wide text-white">
                            {member.username}
                          </p>
                        </div>
                        <div className="flex w-3/5 flex-col items-center justify-center gap-1 font-medium tracking-wide text-white/70">
                          <div className="px-auto h-2 w-full items-center justify-center md:h-4">
                            {member.goodAtPosition.length == 0 && (
                              <p className=" h-full w-full whitespace-nowrap bg-transparent text-center text-[.6rem] font-medium tracking-widest md:text-xs md:tracking-wide">
                                -
                              </p>
                            )}

                            <Swiper
                              loop={true}
                              speed={500}
                              centeredSlides={true}
                              autoplay={{
                                delay: 2000,
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
                                      className="sweepLight h-full w-full whitespace-nowrap bg-transparent text-[.6rem] font-medium tracking-widest md:text-xs md:tracking-wide"
                                    >
                                      {position}
                                    </SwiperSlide>
                                  );
                                })}
                            </Swiper>
                          </div>
                          <p className="h-2 whitespace-nowrap text-[.6rem] font-medium tracking-widest md:h-4 md:text-xs md:tracking-wide">
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
                    className="group relative flex h-[95px] w-full flex-col items-center gap-1 rounded-lg border border-transparent bg-black/10 p-2 duration-500 hover:border-white/30 hover:bg-black/20 md:h-[130px] md:rounded-2xl xl:h-[145px]"
                  >
                    <div className="absolute top-3 whitespace-nowrap text-center text-xs font-medium leading-6 tracking-wider text-white/30 duration-500 group-hover:text-white md:text-sm xl:top-4 xl:text-base">
                      加入隊伍
                    </div>
                    <p className="absolute top-6 text-4xl text-[#FFCC66]/50 duration-500 group-hover:text-[#FFCC66] md:top-10 md:text-5xl lg:text-6xl">
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
