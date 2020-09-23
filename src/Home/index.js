import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import GetUserDetails from "../Common/ApiCall/GetUserDetails";
import SendNotification from "../Common/Utils/SendNotification";
import NotificationTypeEnum from "../Common/Models/NotificationTypeEnum";
import {PrivateRoute} from "../Components/PrivateRoute";
import Dashboard from "../Dashboard";
import {GeneralRoute} from "../Components/GeneralRoute";
import {AuthRoute} from "../Components/AuthRoute";
import WelcomePage from "../WelcomePage";
import Auth from "../Auth";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";
import ReactGA from 'react-ga'

const Home = () => {
  const [user, setUser] = useState(null)
  const [isAuthed, setIsAuthed] = useState(false)

  function handleAuthed() {
    if(user) {
      setIsAuthed(true);
    }
  }

  function setUserDetails() {
    let token = localStorage.getItem('authToken')
    if(token) {
      GetUserDetails(token)
        .then(r => {
          if(r.success) {
            setUser(r.data)
          }
          else {
            SendNotification(NotificationTypeEnum.Success, 'Token Expired. Login Again')
          }
        })
    }
  }

  useEffect(()=> {
    setUserDetails()
    ReactGA.initialize('UA-178422717-1', {
      debug: true,
      titleCase: false
    });
  }, [])

  useEffect(()=> {
    handleAuthed()
  })

  return(
    <Switch>

      <PrivateRoute
        path="/"
        exact
        user={user}
        isAuthed={isAuthed}
        Component={Dashboard}
      />

      <AuthRoute
        path='/sign-in'
        exact
        isAuthed={isAuthed}
        setUser={setUserDetails}
      >
        <Auth setUser={setUserDetails} signIn />
      </AuthRoute>

      <AuthRoute
        path="/sign-up"
        exact
        isAuthed={isAuthed}
      >
        <Auth signUp />
      </AuthRoute>

      <AuthRoute
        path="/validate/:id"
        exact
      >
        <ForgotPassword />
      </AuthRoute>

      <GeneralRoute
        path="/general"
        Component={WelcomePage}
      />

      <GeneralRoute
        Component={NotFound}
      />

    </Switch>
  )

}

export default Home