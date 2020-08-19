import React from 'react'
import {Row, Col, Card, Layout, Typography, Divider, Button} from 'antd'
import ContentWrapper from "../Components/ContentWrapper";
import PlainContentWrapper from "../Components/PlainContentWrapper";
import IFrameComponent from "../Components/IFrameComponent";
import image from '../Common/Images/frontpage.png'

const {Title} = Typography

const HomePage = ({setKey, user}) => {
  return(
    <PlainContentWrapper>
      <Row justify="center" gutter={24}>
        <Col md={{span: 24}} lg={{span: 12}}>
          <ContentWrapper marginLess>
            <Title style={{fontWeight: 'medium'}}>
              Hey {user.email}!
              <br />
              Here's what you can do with ProfileMate!
            </Title>
            <Divider style={{borderTop: '1px solid black'}} />
            <IFrameComponent url={"https://www.youtube.com/embed/tFNWHLEIiJ0"} />
          </ContentWrapper>
        </Col>
        <Col md={{span: 24}} lg={{span: 12}} >
          <div>
            <img
              width="100%"
              src={image}
              alt={'image'}
            />
            <Button onClick={()=>setKey(2)} className="dark-button" type="primary" block size={"large"}>
              Download
            </Button>
          </div>
        </Col>
      </Row>
    </PlainContentWrapper>
  )
}

export default HomePage