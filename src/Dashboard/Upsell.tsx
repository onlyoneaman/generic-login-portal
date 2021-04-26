import React from "react";
import {Row, Col, Card, Typography, Divider, Button} from 'antd'
import ContentWrapper from "../Components/ContentWrapper";

const {Meta} = Card
const {Title} = Typography

const details = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et'
  }
]

const Upsell = () => {
  return(
    <ContentWrapper>
      <Title>
        Upsell
      </Title>
      <Divider />
      <Row gutter={[24, 16]}>
        {details.map((item)=>(
          <Col md={{span: 12}} lg={{span: 6}} >
            <Card
              cover={
                <img
                  alt="example"
                  src={item.img}
                />
              }
            >
              <div className="align-center">
                <Meta
                  description={item.desc}
                />
                <br />
                <Button type="primary">
                  Button
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </ContentWrapper>
  )
}

export default Upsell