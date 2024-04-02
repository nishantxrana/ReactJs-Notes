import React, { useContext } from 'react'
import userContext from '../context/UserContext'


function ReadData() {
    const {user} = useContext(userContext);
    
    if (!user) {  // this chekcing is very important
        return <div>please login</div>
    }
    return <div>First Name : {user.first}<br/> Second Name : {user.second}</div>
  
}

export default ReadData