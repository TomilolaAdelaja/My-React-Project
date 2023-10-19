import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Protected = ({ isSignedIn, children }) => {
  if (isSignedIn) {
    return (
      <>
        {children}
        {/* <Outlet /> */}
      </>
    );
  } else {
    return <Navigate to="login" />;
  }
};
