import React, { useContext } from 'react'
import UserContext from '../userContext'

function DisplayComponent() {
 const {user} = useContext(UserContext)

 if(!user)  return (<h1>Welcome</h1>)
  return (
    <h1>Welcome {user.name}</h1>
  )
}

export default DisplayComponent