import React, { useContext } from 'react'
import './general.css'

import { Theme } from './contexts/Theme'
import { UserSession } from './contexts/UserSession'

import Header from './components/Header/Header'
//import Login from './components/Sections/Login/Login'
//import Logout from './components/Sections/Logout/Logout'
import Palabrerio from './components/Palabrerio/Palabrerio'

const App = () => {
  const { userInfo: { isUserLoggedIn } } = useContext(UserSession)

  return (
    <>

      <Header isLogged={isUserLoggedIn} theme={Theme} />
      <Palabrerio />
      {/* {
        isUserLoggedIn
          ? <>
            <Logout />
            <Palabrerio />
          </>
          : <Login />
      } */}
    </>
  )
}

export default App