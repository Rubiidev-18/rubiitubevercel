import React from "react";
import Sidebar from "./Sidebar";
import MainContanier from "./MainContanier";
import WatchPage from "./WatchPage";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet /> {/* It is wrapping MainContainer and Watch Page*/}
    </div>
  );
};

export default Body;
