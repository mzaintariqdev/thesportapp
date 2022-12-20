import React from "react";
import MainRoutes from "./routes/MainRoutes";
import { useSelector } from "react-redux";
import SignIn from "./pages/signIn";

function Layout() {
  const user = useSelector((state) => state.auth.value.name);

  return user ? <MainRoutes /> : <SignIn />;
}

export default Layout;
