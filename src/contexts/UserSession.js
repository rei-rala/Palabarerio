import React, { createContext, useEffect, useState } from "react";


const UserSession = createContext();

const UserSessionContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    userTag: 'Guest',
    theme: {
      color: 'red',
      'font-family': 'consolas',
      'font-size': '1',
      darkTheme: true
    }
  })

  /* 
    useEffect(() => {
      console.table(userInfo)
  
    }, [userInfo]) */

  return <UserSession.Provider value={{
    userInfo,
    setUserInfo,
  }}>
    {children}
  </UserSession.Provider>
}

export { UserSession }
export default UserSessionContext