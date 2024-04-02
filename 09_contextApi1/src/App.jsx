import { useState } from 'react'
import WriteData from './components/WriteData'
import UserContextProvider from './context/UserContextProvider'
import ReadData from './components/ReadData'



function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <>
    <WriteData />
    <ReadData />
    </>
    </UserContextProvider>
  )
}

export default App
