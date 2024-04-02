import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 100; // this will not work as UI updation is in the hand of React and i will not work with simple variables we need to use hooks for that
  
  const [count, setCount] = useState(0)

  // let increaseCount = () => {
    // counter++;
    // console.log(counter);
  // };
  // let decreaseCount = () => {
  //   counter--;
  //   console.log(counter);
  // };

  let increaseCount = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1) these will still be updating once due to fibber algo as these tasks go under batch to algo and only one executed due to same operation on same data

    // real setCount(function) behind the scene

    setCount((prevCount)=> prevCount+1)
    setCount((prevCount)=> prevCount+1) // now these will work as now first call happens then next 
  }
  let decreaseCount = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <br />
      <br />
      <button onClick={decreaseCount}>decrease</button>
    </>
  )
}

export default App
