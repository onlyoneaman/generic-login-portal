import React from "react";
import {Layout} from "antd";

const {Content} = Layout

interface compProps {
  children: React.ReactNode,
  marginLess?: boolean,
  style?: React.CSSProperties
}

const ContentWrapper = ({
  style = {},
  marginLess = false,
  children
}: compProps) => {
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