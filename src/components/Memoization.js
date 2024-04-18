import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";
// UseMemo - it lets you cache the results of a calculation between re-renders untill the dependencis changes
// UseCallBack - it lets you cache a function definition between re-renders
const Memoization = () => {
const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // Heay operation
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-4 w-[400px] border border-black " +
        (isDarkTheme && "bg-gray-900  text-white")
      }
    >
      <div>
        <button
          className="m-4 p-4 border border-blue-300 bg-green-300"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black p-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1 className="p-2 mt-4 font-bold text-xl">Prime No : {prime}</h1>
      </div>
    </div>
  );
};

export default Memoization;
