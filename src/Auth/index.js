import React, {useState} from "react";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Row, Col, Typography, Divider} from "antd";
import PlainContentWrapper from "../Components/PlainContentWrapper";
import ContentWrapper from "../Components/ContentWrapper";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignInImage from '../Common/Images/login.png'
import Register from '../Common/Images/register.png'

const {Title} = Typography

const Auth = ({setUser}) =>{
  const [tab,setTab] = useState(1)

  const title = tab ? 'Welcome Back!' : 'Come, Join us!'
  const formTitle = tab ? 'Sign In' : 'Sign Up'
  const image = tab ? SignInImage : Register

  return(
    <UserLogWrapper>

      <Row align="center" >

        <Col md={{span: 12}} lg={{span: 16}}>
          <PlainContentWrapper>
            <Title>
              {title}
            </Title>

            <img
              width="100%"
              alt="image"
              src={image}
            />
          </PlainContentWrapper>
        </Col>

        <Col md={{span: 8}}>
          <ContentWrapper style={{height: '80%'}} >

            <Title>
              {formTitle}
            </Title>

            <Divider />

            {
              tab ?
                <SignIn
                  setTab={setTab}
                  setUser={setUser}
                />
                :
                <SignUp
                  setTab={setTab}
                />
            }

          </ContentWrapper>
        </Col>

      </Row>

    </UserLogWrapper>
  )

}

export default Auth