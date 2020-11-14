import React, {useEffect, useState} from "react";
import {Layout, Menu, Button} from "antd";
import logo from '../Common/Images/logo-full.png'
import {
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Switch} from "react-router";
import HomePage from "./HomePage";
import isMobile from "is-mobile";
import FAQ from "./FAQ";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import {logout} from '../Common/Logout'

const {Header, Sider} = Layout

const MenuItems = [
  {
    key: 1,
    icon: <UserOutlined />,
    title: 'Home',
    link: '/'
  },
  {
    key: 2,
    title: 'FAQ',
    icon: <QuestionCircleOutlined />,
    link: '/faq'
  }
]

const Dashboard = ({user}) => {
  const [collapsed, toggleCollapsed] = useState(false)
  const [key, setKey] = useState(1)

  function toggle() {
    toggleCollapsed(!collapsed);
  }

  function toggleOnMobile() {
    if(isMobile()) {
      toggleCollapsed(true);
    }
  }

  function component() {
    switch (key) {
      case 1: return <HomePage user={user} setKey={setKey} />
      case 2: return <FAQ />
      default: return <HomePage user={user} setKey={setKey} />
    }
  }

  useEffect(()=>toggleOnMobile(), [])

  return(
    <Layout className="is-fullheight">

      <Header className="header" style={{backgroundColor: 'white'}}>
        <img
          className="logo-img"
          alt="Logo"
          src={logo}
        />

        <Menu mode="horizontal" style={{float: 'right'}} >
          <Menu.Item key="3">
            <Button block onClick={()=>logout()} type="primary" className="dark-button">
              Log out
            </Button>
          </Menu.Item>
        </Menu>

      </Header>

      <Layout className="site-layout">

        <Sider collapsible collapsed={collapsed} onCollapse={toggle} >

          <Menu theme="dark" selectedKeys={String(key)} mode="inline" onClick={(key)=>setKey(parseInt(key.key))} defaultSelectedKeys={['1']}>
            {MenuItems.map((item)=>(
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>
                  {item.title}
                </Link>
              </Menu.Item>
            ))}
          </Menu>

        </Sider>

        <Switch>
          <Route
            path="/faq"
            exact
            component={() => (
              <FAQ setKey={()=>setKey(2)} />
            )}
          />

          <Route
            component={() => (
              <HomePage setKey={()=>setKey(1)} user={user} />
            )}
          />

        </Switch>

      </Layout>

    </Layout>
  )
}

export default Dashboard