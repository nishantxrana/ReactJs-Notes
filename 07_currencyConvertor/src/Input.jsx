import React, { useState } from 'react'

function Input() {
  let [currInput,setCurrInput] = useState(0)

  return (
    <div className='bg-white w-80 h-24 rounded-2xl p-1.5 '>first
    <input className=' bg-indigo-200' type="number" name="" id="" />
    <input type="color" name="" id="" />
    </div>

  )
}

export default Input