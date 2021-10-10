import React, { createContext, useState } from "react";


const UserSession = createContext();

const UserSessionContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    userTag: 'Guest'
  })



  return <UserSession.Provider value={{
    userInfo,
    setUserInfo,
  }}>
    {children}
  </UserSession.Provider>
}

export { UserSession }
export default UserSessionContext