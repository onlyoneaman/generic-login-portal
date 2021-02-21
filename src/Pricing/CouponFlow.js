import { CheckSquareFilled } from '@ant-design/icons'
import React from 'react'
import ValidateCoupon from '../Common/ApiCall/ValidateCoupon'
import NotificationTypeEnum from '../Common/Models/NotificationTypeEnum'
import SendNotification from '../Common/Utils/SendNotification'

const CouponFlow = ({couponCode, validCoupon, couponDiscount, setCoupon, setValidCoupon, setCouponDiscount, removeCoupon}) => {

  const ValidateCouponFunction = () => {
    ValidateCoupon(couponCode)
      .then(r => {
        if(r.is_valid) {
          SendNotification(NotificationTypeEnum.Success, r.percentage_discount + '% Discount Applied')
          setValidCoupon(true)
          setCouponDiscount(r.percentage_discount)
        } else {
          SendNotification(NotificationTypeEnum.Failure, 'Invalid Coupon')
        }
      })
  }

  const enterPressed = (e) => {
    if(e.which===13 || e.keyCode===13) {
      ValidateCouponFunction()
    }
  }

  return(
    <div>
      <div className="has-text-right" style={{padding: '24px 24px 0 24px'}}>
        <div
          className="is-uppercase has-text-weight-bold"
        >
          Coupon Code
        </div>
      </div>

      {!validCoupon ? (
                <div className="field">
                  <div className="control" style={{padding: '10px 24px 0 24px', textAlign: 'end'}}>
                    <input
                      style={{padding: '12px', width: 'auto'}}
                      className="input is-small"
                      value={couponCode}
                      onChange={e=>setCoupon((e.target.value).toUpperCase())}
                      onKeyPress={e=>enterPressed(e)}
                    />
                    &nbsp;&nbsp;
                    <CheckSquareFilled
                      onClick={()=>ValidateCouponFunction()}
                      className="title cursor-pointer"
                    />
                  </div>
                </div>
              ) : (
                <div style={{padding: '10px 24px 0 24px'}}>
                  <div className="tags has-addons" style={{justifyContent: 'flex-end'}}>
                    <span className="tag is-large is-danger">
                      {couponCode}
                    </span>
                    <a 
                      onClick={removeCoupon} 
                      className="tag is-large is-delete" 
                    />
                  </div>
                </div>
              )}
    </div>
  )
}

export default CouponFlow