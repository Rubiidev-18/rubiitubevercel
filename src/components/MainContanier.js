import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContanier = () => {
  return (
    <div className="col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContanier;
