import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";

import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Navigation />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
