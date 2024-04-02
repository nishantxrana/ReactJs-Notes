import React from "react";
import { useState } from "react";

function Github() {
  let [data, setData] = useState([]);
  fetch("https://api.github.com/users/nishantxrana")
    .then((res) => res.json())
    .then((res) => setData(res));

  let image = data.avatar_url;
  return (
    <div className="flex justify-center items-center">
      <h1 className=" text-2xl bold">User: {data.name}</h1>
      <img className=" w-60 rounded-full" src={image} alt="" />
    </div>
  );
}

export default Github;
