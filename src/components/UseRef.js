import React, { useEffect, useRef, useState } from "react";

// UseRef - It lets you reference a value that is not needed for rendering

const UseRef = () => {
  const [stateVal, setStateval] = useState(0);
  let x = 0;
  console.log("Rendering...");

  const i = useRef(null);

  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Interval is Running " + Math.random());
    }, 1500);
    return ()=> clearInterval(i.current)
  }, []);

  const ref = useRef(0);
  return (
    <div className="m-4 p-4 border w-[400px] border-black">
      <div>
        <button
          className="m-4 p-4 bg-green-200 mr-10 "
          onClick={() => {
            x = x + 1;
            console.log("X = " + x);
          }}
        >
          X val
        </button>
        <span className="font-bold text-xl"> Let = {x}</span>
      </div>
      <div>
        <button
          className="m-4 p-4 bg-green-200 mr-10"
          onClick={() => {
            setStateval(stateVal + 1);
            console.log("State = " + stateVal);
          }}
        >
          State
        </button>
        <span className="font-bold text-xl">State = {stateVal}</span>
      </div>
      <div>
        <button
          className="m-4 p-4 bg-green-200 mr-10"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = " + ref.current);
          }}
        >
          Refernce
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
      <button className="m-4 p-4 bg-red-600 text-white font-bold rounded-lg" onClick={()=>clearInterval(i.current)}>Stop Printing</button>
    </div>
  );
};

export default UseRef;
