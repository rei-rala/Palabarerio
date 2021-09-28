import React, { useContext } from 'react'
import './general.css'

import { Theme } from './contexts/Theme'
import { UserSession } from './contexts/UserSession'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
//import Login from './components/Sections/Login/Login'
//import Logout from './components/Sections/Logout/Logout'
import Palabrerio from './components/Palabrerio/Palabrerio'
import UserConfig from './components/UserConfig/UserConfig'

const App = () => {
  const { userInfo: { isUserLoggedIn } } = useContext(UserSession)

  return (
    <BrowserRouter>

      <Header isLogged={isUserLoggedIn} theme={Theme} />
      <Switch>

        <Route exact path='/home'>
          <Palabrerio />
        </Route>
        <Route exact path='/config'>
          <UserConfig />
        </Route>
        {/* {
        isUserLoggedIn
        ? <>
        <Logout />
        <Palabrerio />
        </>
        : <Login />
      } */}

      </Switch>
    </BrowserRouter>
  )
}

export default App