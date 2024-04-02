import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let allNames = ['Jacket', 'TShirt', 'Pant']
  let allPrice = [100,110,120]

  return (
    <>
       <Card name = {allNames[0]} price = {allPrice[0]} /> 
       <br />
       <Card name = {allNames[1]} price = {allPrice[1]} /> 
       <br />
       <Card name = {allNames[2]} price = {allPrice[2]} /> 
    </>
  )
}

export default App
