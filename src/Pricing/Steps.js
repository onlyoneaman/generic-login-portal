import React from "react";
import {Steps} from "antd";

const StepsComponent = ({current, goBack}) => {
  const {Step} = Steps;
  if(current === 2) {
    return (
      <div>
        <div className="section" style={{padding: '0 1.5rem 2rem'}}>

          <Steps current={current}>
            <Step />
            <Step className="cursor-pointer" onClick={goBack} title="Sign Up Page" />
            <Step />
          </Steps>

        </div>
      </div>
    )
  }
  else if(current === 1) {
    return (
      <div>
        <div className="section" style={{padding: '0 1.5rem 2rem'}}>

          <Steps current={current}>
            <Step className="cursor-pointer" onClick={goBack} title="Plans Page"  />
            <Step />
            <Step />
          </Steps>

        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <div className="section" style={{padding: '0 1.5rem 2rem'}}>

          <Steps current={current}>
            <Step />
            <Step />
            <Step />
          </Steps>

        </div>
      </div>
    )
  }
}

export default StepsComponent