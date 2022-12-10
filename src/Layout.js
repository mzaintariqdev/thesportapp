import React from "react";
import MainRoutes from "./MainRoutes";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn.jsx";
function Layout() {
  const user = useSelector((state) => state.auth.value.name);

  return user ? <MainRoutes /> : <SignIn />;
}

export default Layout;
