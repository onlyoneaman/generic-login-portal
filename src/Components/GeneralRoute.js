import React from "react";
import {Route} from "react-router-dom";

export const GeneralRoute = ({Component, ...rest}) => {
  //console.log(user, rest)

  return(
    <Route
      render={props => (
        <Component
          {...props}
        />
      )}
    />
  )
}
