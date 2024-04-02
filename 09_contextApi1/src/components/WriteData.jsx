import React, { useContext,useState } from 'react'
import userContext from '../context/UserContext'


function WriteData() {
    const [first,setFirst] = useState('')
    const [second,setSecond] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmittion = (e)=>{
        e.preventDefault()
        setUser({first,second});

    }
  
  return (
    <>
    <input type="text" 
    value={first}
    onChange={(e)=>setFirst(e.target.value)}
    placeholder='first name'/>
    <input type="text" 
    value={second}
    onChange={(e)=>setSecond(e.target.value)}
    placeholder='second name'
    />
    <button onClick={handleSubmittion}>Submit</button>
    </>
  )
}

export default WriteData