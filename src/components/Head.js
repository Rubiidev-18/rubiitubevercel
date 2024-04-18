import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggestions, setShowSuggetions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  /**
   * searchCache ={
   *  iphone : ["iphone 11","iphone 12"]
   * }
   * searchQuery = iphone
   *
   */

  useEffect(() => {
    // this will call settimeout for 200 ms and after that it will call a callback function getSearchSuggetion()
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        // we will check if it is in our cache or not so if its there then if block will execute
        setSuggetions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      // this retun will call if we again hit anoter key press before 200 ms
      clearTimeout(timer);
    };
  }, [searchQuery]); // when ever my searchbox text changes it should call useEffect

  /**
   * onKey press - i
   * - render the component
   * - useEffect();
   * - start timer => make an api call after 200 ms
   *
   * onKey Press -ip
   * - destroy the component (useEffetc return method)
   * - re-render the component
   * - useEffect();
   * - start timer => make an api call after 200ms
   */

  const getSearchSuggestion = async () => {
    // console.log("API CALL - " + searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggetions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-xl">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mr-2 cursor-pointer"
          alt="Hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8"
            alt="logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-4">
        <div>
          <input
            className="border border-gray-300 w-1/2 p-2 rounded-l-full"
            placeholder="Search... (Starters: Geometry Dash, Gaming, e.t.c)"
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggetions(true)}
            onBlur={() => setShowSuggetions(false)}
          />
          <button
            className="border border-red-200 p-2 bg-red-100 rounded-r-full"
            type="text"
          >
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[33rem] shadow-lg rounded-lg border border-gray-200 hover:cursor-pointer">
            <ul>
              {suggetions.map((data) => (
                <li
                  className="py-2 shadow-sm hover:bg-red-200 rounded-lg"
                  key={data}
                >
                  🔍 {data}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://cdn-icons-png.freepik.com/256/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
