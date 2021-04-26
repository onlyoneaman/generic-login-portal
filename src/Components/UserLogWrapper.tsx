import React from "react";
import {Layout, Menu, Button} from "antd";
import logo from "../Common/Images/logo-full.png";
import {Link} from "react-router-dom";

const {Header, Content, Footer} = Layout

const UserLogWrapper = ({children}) => {
  return(
    <Layout className="is-fullheight">

      <Header style={{ position: 'fixed', zIndex: 1, backgroundColor: '#F0F2F5', width: '100%' }}>
        <Link to={'/'}>
          <img
            className="logo-img logo"
            alt="Logo"
            src={logo}
          />
        </Link>
        <Menu mode="horizontal" className="menu-float-right theme-background">
          <Menu.Item key="1">
            <Button>
              Support
            </Button>
          </Menu.Item>
        </Menu>
      </Header>

      <Layout className="site-layout">
        <Content className="content-wrapper">
          {children}
        </Content>
      </Layout>

    </Layout>
  )
}

export default UserLogWrapper