import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../utills/loginContext'

const Admin = () => {
  const user = useContext(UserContext)
  return (

    <div>Admin
        <button onClick={()=> user.setLogin(false)}>log out</button>
    </div>
  )
}

export default Admin