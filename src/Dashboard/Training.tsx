import React from "react";
import {Divider, Typography, Row, Col} from "antd";
import ContentWrapper from "../Components/ContentWrapper";
import IFrameComponent from "../Components/IFrameComponent";

const {Title} = Typography

const data = [
  {
    link: "https://www.youtube.com/embed/tFNWHLEIiJ0",
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    link: "https://www.youtube.com/embed/tFNWHLEIiJ0",
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    link: "https://www.youtube.com/embed/tFNWHLEIiJ0",
    text: 'Lorem ipsum dolor sit amet.',
  },
  {
    link: "https://www.youtube.com/embed/tFNWHLEIiJ0",
    text: 'Lorem ipsum dolor sit amet.',
  }
]

const Training = () => {
  return(
    <ContentWrapper>
      <Title>
        Training
      </Title>
      <Divider />
      <Row gutter={[24, 24]}>
        {data.map((item)=>(
          <Col sm={{span: 24}} lg={{span: 12}} className="is-marginless">
            <IFrameComponent url={item.link} />
            <Title level={3} style={{margin: '1rem'}}>
              {item.text}
            </Title>
          </Col>
        ))}
      </Row>
    </ContentWrapper>
  )
}

export default Training