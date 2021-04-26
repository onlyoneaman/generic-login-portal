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
import {Spin, Layout, Row, Col} from "antd";
import ContentWrapper from "../Components/ContentWrapper";
import Loader from "../Components/Loader";
import { getToken } from "../Common/ApiCall/Logout";

const {Content} = Layout

const Home = () => {
  const [user, setUser] = useState(null)
  const [isAuthed, setIsAuthed] = useState(false)
  const [initLoader, setInitLoader] = useState(true)

  function handleAuthed() {
    if(user) {
      setIsAuthed(true);
    }
  }

  function setUserDetails() {
    let token = getToken()
    if(token) {
      GetUserDetails(token)
        .then(r => {
          if(r.success) {
            setUser(r.data)
          }
          else {
            SendNotification(NotificationTypeEnum.Success, 'Token Expired. Login Again')
          }
          setInitLoader(false)
        })
    } else {
      setInitLoader(false)
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

  if(initLoader) {
    return (
      <Loader />
    )
  }

  return(
    <Switch>

      <AuthRoute
        path='/sign-in'
        exact
        isAuthed={isAuthed}
        user={user}
        setUser={setUserDetails}
      >
        <Auth 
          setUser={setUserDetails} 
          signIn 
          isAuthed={isAuthed}
        />
      </AuthRoute>

      <AuthRoute
        path="/sign-up"
        exact
        isAuthed={isAuthed}
        user={user}
        setUser={setUserDetails}
      >
        <Auth 
          signIn={false}
          isAuthed={isAuthed}
          setUser={setUserDetails}
        />
      </AuthRoute>

      <AuthRoute
        path="/validate/:id"
        isAuthed={isAuthed}
        user={user}
        setUser={setUserDetails}
        exact
      >
        <ForgotPassword />
      </AuthRoute>

      <GeneralRoute
        path="/general"
        Component={WelcomePage}
      />

      <PrivateRoute
        path="/"
        user={user}
        setUser={setUserDetails}
        isAuthed={isAuthed}
        Component={Dashboard}
      />

      <GeneralRoute
        Component={NotFound}
      />

    </Switch>
  )

}

export default Home