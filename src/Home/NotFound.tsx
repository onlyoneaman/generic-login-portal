import React from "react";
import UserLogWrapper from "../Components/UserLogWrapper";
import {Col, Row, Typography} from "antd";
import PlainContentWrapper from "../Components/PlainContentWrapper";

const {Title} = Typography

const NotFound = () => {
  return(
    <UserLogWrapper>
      <Row>
        <Col md={{span: 12}} lg={{span: 16}}>
          <PlainContentWrapper>
            <Title>
              Page Not Found
            </Title>
          </PlainContentWrapper>
        </Col>
      </Row>
    </UserLogWrapper>
  )
}

export default NotFound