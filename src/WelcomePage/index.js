import React from "react";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Col, Row,Typography} from "antd";
import PlainContentWrapper from "../Components/PlainContentWrapper";

const {Title} = Typography

const WelcomePage = () => {
  return(
    <UserLogWrapper>
      <Row>
        <Col md={{span: 12}} lg={{span: 16}}>
          <PlainContentWrapper>
            <Title>
              Welcome Page
            </Title>
            <Title level={3} >
              This page can be viewed by anyone
            </Title>
          </PlainContentWrapper>
        </Col>
      </Row>
    </UserLogWrapper>
  )
}

export default WelcomePage