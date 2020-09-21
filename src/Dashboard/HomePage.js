import React from 'react'
import {Row, Col, Card, Layout, Typography, Divider, Button} from 'antd'
import ContentWrapper from "../Components/ContentWrapper";
import PlainContentWrapper from "../Components/PlainContentWrapper";
import IFrameComponent from "../Components/IFrameComponent";

const {Title} = Typography

const HomePage = ({user}) => {
  return(
    <PlainContentWrapper>
      <Row justify="center" gutter={24}>
        <Col md={{span: 24}} lg={{span: 12}}>
          <ContentWrapper marginLess>
            <Title style={{fontWeight: 'medium'}}>
              Hey {user.email}!
            </Title>
            <Divider style={{borderTop: '1px solid black'}} />
            <IFrameComponent />
          </ContentWrapper>
        </Col>
      </Row>
    </PlainContentWrapper>
  )
}

export default HomePage