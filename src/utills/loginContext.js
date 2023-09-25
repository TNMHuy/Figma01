import React, { createContext, useState } from 'react'
export const UserContext = createContext()


const LoginProvider = ({children}) => {
    const [isLoggedIn,setLogin] = useState(false)
  return (
    <UserContext.Provider value ={{ isLoggedIn, setLogin}}>
        {children}
    </UserContext.Provider>
  )
}

export default LoginProvider