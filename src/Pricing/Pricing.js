import React, { useState } from 'react'
import Header from '../bulmaComps/Header'
import PageSeo from '../Components/PageSeo'
import AccountsSlider from './AccountsSlider'
import CouponFlow from './CouponFlow'
import PriceInfo from './PriceInfo'
import PriceSwitch from './PriceSwitch'
import './pricing.sass'
import StepsComponent from './Steps'
import { TotalPriceCard } from './TotalPriceCard'

const Pricing = () => {
  const [couponCode, setCouponCode] = useState('')
  const [validCoupon, setValidCoupon] = useState(false)
  const [couponDiscount, setCouponDiscount] = useState(0)

  function removeCoupon() {
    setCouponDiscount(0)
    setValidCoupon(false)
    setCouponCode('')
  }

  return(
    <div className="hero gpad is-fullheight">
      <PageSeo />
      <Header />
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-8">
              <PriceSwitch />
              <AccountsSlider />
              <PriceInfo />
            </div>
            <div className="column is-4">
              <StepsComponent />
              <CouponFlow 
                couponCode={couponCode}
                validCoupon={validCoupon}
                couponDiscount={couponDiscount}
                removeCoupon={removeCoupon}
                setCoupon={setCouponCode}
                setValidCoupon={setValidCoupon}
                setCouponDiscount={setCouponDiscount}
              />
              <TotalPriceCard 
                coupon={validCoupon && couponCode}
                valid={true}
                plan_name={'Premiym'}
                nextPageFunction={()=>console.log("next")}
                nextExist={true}
                discount_percentage={10}
                price={1000}
                months={12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing