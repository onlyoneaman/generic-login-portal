import React, {useState} from 'react'
import FaqComponent from '../Faq/FaqComponent'
import {Button, Modal} from 'antd'
import logo from '../Common/Images/growpad-logo-full.png'

const Header = () => {
  const [visible, setVisible] = useState(false)

  return(
    <>

      <Modal
        visible={visible}
        onCancel={()=>setVisible(false)}
        footer={null}
        width={800}
      >
        <FaqComponent 
          siteAddress="growpad.io"
        />
      </Modal>

      <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="Logo" />
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div className="navbar-end">
            <span class="navbar-item">
              <a 
                className="button is-info is-inverted" 
                href="#"
                onClick={()=>setVisible(true)}  
              >
                <span>
                  FAQ
                </span>
              </a>
              <a class="button is-info is-inverted">
                <span>
                  Sign In
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
    </div>


    </>
  )
}

export default Header