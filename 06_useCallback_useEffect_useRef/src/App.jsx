import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [number, setNumbers] = useState(false);
  const [character, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  let passwordRef = useRef();

  let clipboardCopy = () => {
    passwordRef.current?.select(password);
    passwordRef.current?.setSelectionRange(0, 2);
    window.navigator.clipboard.writeText();
  };

  let passGen = useCallback(() => {
    let pass = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) possible += "0123456789";
    if (character) possible += '+-*/:;"][{}<>]';

    for (let i = 0; i < length; i++) {
      const element = i;
      let randomNum = Math.floor(Math.random() * possible.length + 1);
      pass += possible.charAt(randomNum);
    }
    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passGen();
  }, [length, number, character, setPassword]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen pt-2 bg-black text-white">
        <div
          className=" w-3/4 h-1/2 bg-gray-700 py-3 px-6
         rounded-xl"
        >
          <h2 className=" text-3xl text-center  text mb-6 ">
            Password Generator
          </h2>

          <div className="flex justify-between">
            <input
              className="text-gray-500 px-2 w-4/5 h-9 rounded-2xl"
              type="text"
              value={password}
              ref={passwordRef}
            />
            <button
              onClick={clipboardCopy}
              className=" bg-cyan-300 rounded-3xl py-1.5 px-3"
            >
              Copy
            </button>
          </div>
          <div className=" mt-16 flex justify-between">
            <div>
              <input
                onChange={(event) => {
                  setLength(event.target.value);
                }}
                type="range"
                value={length}
                min={6}
                max={40}
                id="passLen"
              />
              <label className=" ml-2" htmlFor="passLen">
                {length}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id="numCheck"
                onChange={() => {
                  setNumbers((prev) => !prev);
                }}
              />
              <label htmlFor="numCheck">includeNum</label>
            </div>
            <div>
              <input
                onChange={() => {
                  setCharacters((prev) => !prev);
                }}
                type="checkbox"
                name=""
                id="charCheck"
              />
              <label htmlFor="charCheck">includeChar</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
