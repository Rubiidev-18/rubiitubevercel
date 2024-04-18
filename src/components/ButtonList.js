import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Geometry Dash",
  "Songs",
  "Live",
  "Soccer",
  "Cooking",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((data,index) => (
        <Button key={index} name={data} />
      ))}
    </div>
  );
};

export default ButtonList;
