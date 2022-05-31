import React from "react";

import DashBoard from "./pages/dashboard/DashBoard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/clients/Clients";
import Schedule from "./pages/schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
function MainRoutes() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <div>
          {" "}
          <Sidebar />
        </div>
        <div
          style={{
            width: "100%",
            overflow: "auto",
            backgroundColor: "#F5F6F8",
          }}
        >
          <Routes>
            {/* dashboard  */}
            <Route exact path="/" element={<DashBoard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<DashBoard />} />
          </Routes>
        </div>
      </div>
      {/* <SignIn /> */}
    </BrowserRouter>
  );
}

export default MainRoutes;
