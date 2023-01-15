import React from "react";
import ReactDOM from "react-dom/client";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
