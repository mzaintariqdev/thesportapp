import React from "react";

import DashBoard from "./pages/dashboard/DashBoard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/clients/Clients";
import Schedule from "./pages/schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/header/header";
import ClientProfile from "./pages/client-profile/clientProfile";
function MainRoutes() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "#F5F6F8",
            overflow: "hidden",
          }}
        >
          <Header />
          <div
            style={{
              width: "100%",
              backgroundColor: "#F5F6F8",
              minHeight: "100vh",
              overflow: "auto",
            }}
          >
            <Routes>
              <Route exact path="/" element={<DashBoard />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/client-profile" element={<ClientProfile />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="*" element={<DashBoard />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* <SignIn /> */}
    </BrowserRouter>
  );
}

export default MainRoutes;
