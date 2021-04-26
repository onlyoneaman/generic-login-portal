import React from "react";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Row, Col, Typography, Divider} from "antd";
import ContentWrapper from "../Components/ContentWrapper";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {Redirect} from "react-router";

const {Title} = Typography

interface props {
  isAuthed: boolean,
  setUser: Function,
  signIn: boolean
}

const Auth = ({
  signIn,
  isAuthed,
  setUser
}: props) =>{

  const formTitle = signIn ? 'Sign In' : 'Sign Up'

  if(isAuthed) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  }

  return(
    <UserLogWrapper>

      <Row align="middle" >

        <Col md={{span: 10}} xs={{span: 20}} >
          <ContentWrapper>

            <Title>
              {formTitle}
            </Title>

            <Divider />

            {
              signIn ?
                <SignIn
                  setUser={setUser}
                />
                :
                <SignUp
                />
            }

          </ContentWrapper>
        </Col>

      </Row>

    </UserLogWrapper>
  )

}

export default Auth