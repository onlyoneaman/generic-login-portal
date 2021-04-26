import React from "react";
import ContentWrapper from "./ContentWrapper";
import {Col, Row, Spin} from "antd";

const Loader = () => {
  return(
    <ContentWrapper>
      <Row justify="center" >
        <Col>
          <Spin />
        </Col>
      </Row>
    </ContentWrapper>
  )
}

export default Loader