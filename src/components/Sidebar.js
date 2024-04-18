import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return  (
    <div className="p-5 shadow-lg col-span-1 w-40">
      <ul className="mt-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/memoization">Memoization</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-1">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold mt-1">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movie</li>
      </ul>
    </div>
  );
};

export default Sidebar;
