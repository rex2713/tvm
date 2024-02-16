import React from "react";
import CourtCard from "../Component/CourtCard";
import Map from "../Component/Map";

const MapPage = () => {

  return (
    <main>
      {/* <div className="h-[120px] w-full bg-gradient-to-b from-[#082A4D] to-[#000000]"></div> */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b from-[#082A4D] to-[#000000]  px-[5vw] pb-10 pt-28">
        <Map/>
      </section>
      <section className="flex flex-col gap-y-10 bg-gradient-to-b from-[#082A4D] to-[#000000] px-[8vw] py-10">
        <CourtCard />
      </section>
    </main>
  );
};

export default MapPage;
