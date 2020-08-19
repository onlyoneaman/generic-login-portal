import React from "react";
import PlainContentWrapper from "../Components/PlainContentWrapper";
import {Collapse} from "antd";

const {Panel} = Collapse

const FaqData = [
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\','
  },
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\','
  },
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\','
  },
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\','
  },
  {
    question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\','
  }
]

const FAQ = () => {
  return(
    <PlainContentWrapper>
      <Collapse
        accordion
        bordered
        ghost
        className="site-collapse-custom-collapse"
      >
        {FaqData.map((item, index)=>(
          <Panel header={item.question} key={index} className="site-collapse-custom-panel">
            <p style={{color: 'white', fontWeight: 'bold'}}>{item.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </PlainContentWrapper>
  )
}

export default FAQ