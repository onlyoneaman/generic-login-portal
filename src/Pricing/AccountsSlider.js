import { Slider } from 'antd'
import React from 'react'

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};


const AccountsSlider = () => {
  return(
    <div className="card">
      <div className="card-content">
      <div className="slider-component">
        <h3>
          Number of Accounts
        </h3>
        <Slider
          defaultValue={37}
          marks={marks} 
          step={null}
        />
      </div>
      </div>
    </div>
  )
}

export default AccountsSlider