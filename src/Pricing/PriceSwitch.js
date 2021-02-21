import React from 'react'
import {Switch} from 'antd'

const PriceSwitch = () => {
  return(
    <div className="section is-pb-5 is-mb-5">
      Monthly&nbsp;&nbsp;
      <Switch
        size="large"
      />
      &nbsp;&nbsp;Yearly
    </div>
  )
}

export default PriceSwitch