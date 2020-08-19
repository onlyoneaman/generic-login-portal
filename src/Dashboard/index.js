import React, {useEffect, useState} from "react";
import {Layout, Menu, Button} from "antd";
import logo from '../Common/Images/logo-full.png'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined, CloudDownloadOutlined
} from '@ant-design/icons';
import HomePage from "./HomePage";
import Download from "./Download"
import Upsell from "./Upsell";
import Training from "./Training";
import isMobile from "is-mobile";
import PremiumTraining from "./PremiumTraining";
import FAQ from "./FAQ";

const {Header, Sider, Content} = Layout

const Dashboard = (user) => {
  const [collapsed, toggleCollapsed] = useState(false)
  const [key, setKey] = useState(1)

  user = user.user;

  function toggle() {
    toggleCollapsed(!collapsed);
  }

  function toggleOnMobile() {
    if(isMobile()) {
      toggleCollapsed(true);
    }
  }

  function IsPremiumTraining() {
    user.permission.forEach((item)=>{
      if(item === 'premium_training') {}
      return true
    })
    return false
  }

  function component() {
    switch (key) {
      case 1: return <HomePage user={user} setKey={setKey} />
      case 2: return <Download />
      case 3: return <Training />
      case 4: return <PremiumTraining permissions={IsPremiumTraining} />
      case 5: return <Upsell />
      case 7: return <FAQ />
      default: return <HomePage user={user} setKey={setKey} />
    }
  }

  function logout() {
    localStorage.removeItem('authToken')
    window.location.reload()
  }

  console.log('child', user)

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
          <Menu.Item key="1">
            <Button block>
              Webinar
            </Button>
          </Menu.Item>
          <Menu.Item key="2">
            <Button block>
              Support
            </Button>
          </Menu.Item>
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
            <Menu.Item key="1" icon={<UserOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<CloudDownloadOutlined />}>
              Download
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Training
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined />}>
              Premium Training
            </Menu.Item>
            <Menu.Item key="5">
              Upsell
            </Menu.Item>
            <Menu.Item key="6">
              WhiteLabel
            </Menu.Item>
            <Menu.Item key="7">
              FAQ
            </Menu.Item>
          </Menu>

        </Sider>

        {component()}

      </Layout>

    </Layout>
  )
}

export default Dashboard