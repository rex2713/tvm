import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./Layout/Layout";
import MapPage from "./page/MapPage";
import NewsPage from "./page/NewsPage";
import TeamLayout from "./Layout/TeamLayout";
import TeamList from "./page/TeamList";
import TeamCreate from "./page/TeamCreate";
import TeamManage from "./page/TeamManage";
import MemberLayout from "./Layout/MemberLayout";
import MemberSign from "./page/MemberSign";
import MemberLogin from "./page/MemberLogin";
import MemberInfo from "./page/MemberInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path="map" element={<MapPage />} />
            <Route path="team" element={<TeamLayout />}>
              <Route path="list" element={<TeamList />} />
              <Route path="create" element={<TeamCreate />} />
              <Route path="manage" element={<TeamManage />} />
            </Route>
            <Route path="news" element={<NewsPage />} />
            <Route path="member" element={<MemberLayout />}>
              <Route path="login" element={<MemberLogin />} />
              <Route path="sign" element={<MemberSign />} />
              <Route path="info" element={<MemberInfo />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
