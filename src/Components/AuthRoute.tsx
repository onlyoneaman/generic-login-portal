import React, {useEffect, useState} from "react";
import {Route, Redirect} from "react-router-dom";

export const AuthRoute = ({children, isAuthed, user, setUser, ...rest}) => {
  console.log(user, rest)

  return(
    <Route
      render={props => isAuthed ? (
          <Redirect to={{
            pathname: '/'
          }} />
      ) : (
          children
      )}
    />
  )
}
