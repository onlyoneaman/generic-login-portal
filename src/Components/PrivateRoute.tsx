import React from "react";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({Component, isAuthed, user, setUser, ...rest}) => {
  //console.log(user, rest)

  return(
    <Route
      render={props => isAuthed ? (
        <Component user={user} />
      ) : (
        <Redirect to={{
          pathname: '/sign-in'
        }} />
      )}
    />
  )
}
