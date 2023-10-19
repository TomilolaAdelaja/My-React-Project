import React from "react";
import Navigation from "./components/nav-menu";
import { Outlet } from "react-router-dom";
import { Protected } from "./components/ProtectedRoute";
import { useAuth } from "./components/AuthContext";

const SharedLayout = () => {
  const {user} = useAuth()
  return (
    <>
      {/* <Navigation /> */}
      <Protected isSignedIn={user ? true : false}>
        <Outlet />
      </Protected>
    </>
  );
};

export default SharedLayout;
