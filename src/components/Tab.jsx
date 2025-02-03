import React from "react";
import { useState } from "react";

const Tab = ({ resData }) => {
  const [data, setData] = useState({ title: "", list: [] });
  const handleClick = (type) => {
    setData({
      title: type === "heroes" ? "Heroes:" : "Villains:",
      list: type === "heroes" ? resData.heroes : resData.villains,
    });
  };
  return (
    <div>
      <button onClick={() => handleClick("heroes")}>Show Heroes </button>
      <button onClick={() => handleClick("villains")}>Show Villains</button>
      <h1>{data.title}</h1>
      <div>
        {data.list.map((value, index) => {
          return (
            <div key={index}>
              <h2>{value.name}</h2>
              <p>{value.powers}</p>
              <p>{value.costume}</p>
            </div>
          );
        })}
      </div>
      {console.log(data)}
    </div>
  );
};

export default Tab;
