import { useState } from 'react'
import Data from './New.jsx';

 
function App() {
  const [count, setCount] = useState(100)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <Data />
      
    </>
  )
}

export default App
