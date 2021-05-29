import React from "react";
import {Route, Redirect} from "react-router-dom";

type props = {
  Component: any,
  isAuthed?: boolean,
  user?: any,
  setUser?: any
}

export const PrivateRoute = ({
  Component, isAuthed, user, setUser, ...rest
}: props) => {
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
