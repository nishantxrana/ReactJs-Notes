import { useState } from "react";

import "./App.css";

function App() {
  const [color, setCount] = useState("blue");

  return (
    <>
      <div
        className=" w-full h-screen flex items-end justify-center pb-5"
        style={{ backgroundColor: color }}
      >
        <div className=" w-fit p-5 rounded-full bg-white h-16 flex justify-center gap-2 items-center ">
          <button onClick={()=>{setCount('red')}} className=" w-16 h-10 rounded-full  bg-red-500">Red</button>
          <button onClick={()=>{setCount('pink')}} className=" w-16 h-10 rounded-full  bg-pink-300">Pink</button>
          <button onClick={()=>{setCount('green')}} className=" w-16 h-10 rounded-full  bg-green-500">Green</button>
          <button onClick={()=>{setCount('yellow')}} className=" w-16 h-10 rounded-full  bg-yellow-500">Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
