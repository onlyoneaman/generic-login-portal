import React from "react";
import {Layout} from "antd";

const {Content} = Layout

const PlainContentWrapper = ({children}) => {
  return(
    <Content
      className="content-wrapper"
    >
      {children}
    </Content>
  )
}

export default PlainContentWrapper