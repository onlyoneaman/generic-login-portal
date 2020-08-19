import React from "react";
import {Layout} from "antd";

const {Content} = Layout

const ContentWrapper = ({children, marginLess, style}) => {
  return(
    <Content
      style={style}
      className={`site-layout-background content-wrapper ` + (marginLess ? 'content-wrapper-margin-less' : '')}
    >
      {children}
    </Content>
  )
}

export default ContentWrapper