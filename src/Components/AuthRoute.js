import React, {useEffect, useState} from "react";
import {Route, Redirect} from "react-router-dom";
import GetUserDetails from "../Common/ApiCall/GetUserDetails";

export const AuthRoute = ({Component, isAuthed, user, setUser, ...rest}) => {
  console.log(user, rest)

  return(
    <Route
      render={props => isAuthed ? (
          <Redirect to={{
            pathname: '/'
          }} />
      ) : (
          <Component />
      )}
    />
  )
}
