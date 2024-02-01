import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./Component/Layout";
import MapPage from "./page/MapPage";
import NewsPage from "./page/NewsPage";
import TeamLayout from "./Component/TeamLayout";
import TeamList from "./page/TeamList";
import TeamCreate from "./page/TeamCreate";
import TeamManage from "./page/TeamManage";
import MemberLayout from "./Component/MemberLayout";
import MemberSign from "./page/MemberSign";
import MemberLogin from "./page/MemberLogin";
import LoggedLayout from "./Component/LoggedLayout";
import MemberInfo from "./page/MemberInfo";
import PlayHistory from "./page/PlayHistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/team" element={<TeamLayout />}>
              <Route path="/team/list" element={<TeamList />} />
              <Route path="/team/create" element={<TeamCreate />} />
              <Route path="/team/manage" element={<TeamManage />} />
            </Route>
            <Route path="/news" element={<NewsPage />} />
            <Route path="/member" element={<MemberLayout />}>
              <Route path="/member/login" element={<MemberLogin />} />
              <Route path="/member/sign" element={<MemberSign />} />
            </Route>
            <Route path="/logged" element={<LoggedLayout />}>
              <Route path="/logged/info" element={<MemberInfo />} />
              <Route path="/logged/play_history" element={<PlayHistory />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
