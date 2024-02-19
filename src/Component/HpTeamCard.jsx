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

const HpTeamCard = () => {
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
    <div className="no-scrollbar flex w-full items-start justify-start gap-[1.5vw] overflow-x-auto ">
      {teamData &&
        teamData.length !== 0 &&
        teamData.map((team) => {
          // console.log(team.court.courtName);

          // if (team.court.courtName != "臺北教育大學") return;
          return (
            <div
              key={uuidv4()}
              className="flex h-[480px] w-[380px] shrink-0 flex-col items-center justify-between gap-4 rounded-3xl border border-transparent bg-[#123659] p-4 shadow-sm duration-500 hover:border-white/30"
            >
              {/* 隊伍基本資訊 */}
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-nowrap text-center text-2xl font-bold leading-10 tracking-widest text-white">
                  {team.court.courtName}
                </h3>
                <h2 className="whitespace-nowrap text-center text-xl font-bold leading-8 tracking-wider text-[#FFE8A3]">
                  {team.date}
                </h2>
              </div>
              <div className="flex w-4/5 items-center justify-center whitespace-nowrap border-t border-white/30 px-4 pt-2 text-2xl font-bold leading-8 tracking-wider text-white/70">
                {team.teamName}
              </div>
              {/* 球員名單 */}
              <div className="grid w-full h-[300px] grid-cols-3 gap-x-2 gap-y-2">
                {/* 隊長資料 */}
                <div className="flex h-[145px] w-full flex-col items-center justify-center gap-1 rounded-2xl bg-black/20 p-2">
                  <div className="flex w-full flex-col items-center justify-center gap-1">
                    <img
                      loading="lazy"
                      src={team.teamLeader.photoSelected}
                      className="h-14 w-14  shrink-0 rounded-full bg-white bg-clip-border outline outline-2 outline-offset-2 outline-[#FFCC66]"
                    />
                    <p className="w-full h-5 whitespace-nowrap text-center text-sm tracking-wide text-white">
                      {team.teamLeader.username}
                    </p>
                  </div>
                  <div className="flex w-2/5 flex-col items-center justify-center gap-1 text-xs font-medium tracking-wide text-white/70">
                    <div className="flex w-full h-4 items-center justify-center">
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
                        {team.teamLeader &&
                          team.teamLeader.goodAtPosition.map((position) => {
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
                    <p className="whitespace-nowrap h-4">
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
                        className="flex h-[145px] w-full flex-col items-center justify-center gap-1 rounded-2xl bg-black/20 p-2"
                      >
                        <div className="flex w-full flex-col items-center justify-center gap-1">
                          <img
                            loading="lazy"
                            src={member.photoSelected}
                            className="h-14 w-14 shrink-0 rounded-full bg-white/10 bg-clip-border"
                          />
                          <p className="w-full h-5 whitespace-nowrap text-center text-sm tracking-wide text-white">
                            {member.username}
                          </p>
                        </div>
                        <div className="flex w-2/5 flex-col items-center justify-center gap-1 text-xs font-medium tracking-wide text-white/70">
                          <div className="flex w-full h-4 items-center justify-center">
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
                          <p className="whitespace-nowrap h-4">
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
                    className="group relative flex h-[145px] w-full flex-col items-center gap-1 rounded-2xl border border-transparent bg-black/10 p-2 duration-500 hover:border-white/30 hover:bg-black/20"
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
          );
        })}
    </div>
  );
};

export default HpTeamCard;
