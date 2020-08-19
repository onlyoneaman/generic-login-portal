import React, {useState} from "react";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Row, Col, Typography, Divider} from "antd";
import PlainContentWrapper from "../Components/PlainContentWrapper";
import ContentWrapper from "../Components/ContentWrapper";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const {Title} = Typography

const Auth = ({setUser}) =>{
  const [tab,setTab] = useState(1)

  const title = tab ? 'Welcome Back!' : 'Come, Join us!'
  const formTitle = tab ? 'Sign In' : 'Sign Up'

  return(
    <UserLogWrapper>

      <Row>

        <Col md={{span: 12}} lg={{span: 16}}>
          <PlainContentWrapper>
            <Title>
              {title}
            </Title>
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