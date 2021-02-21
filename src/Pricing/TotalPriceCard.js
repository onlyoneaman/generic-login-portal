import React from "react";

export function getRoundedPrice (price) {
  price = (price/100).toFixed(2)
  return price
}

export const TotalPriceCard = ({price, coupon, plan_name, valid, nextPageFunction, nextExist, months, discount_percentage}) => {

  return(
    <div
      className="column word-break has-text-centered"
      style={{
        marginTop: '5%'
      }}
    >
      <div style={{display: 'grid'}}>
        <div
          className="card has-text-centered pricing-card"
          style={{
            background: 'transparent linear-gradient(180deg, #00AEEB 0%, #82DEFF 100%) 0% 0% no-repeat padding-box'
          }}
        >
          <div
            className="title text-roboto-medium pricing-card-header is-size-1-widescreen is-size-3-desktop is-size-4-tablet"
          >
            <div
              className="text-roboto is-uppercase title has-text-weight-bold is-size-5-tablet is-size-6-mobile is-size-4-desktop pricing-title"
              style={{
                backgroundColor: 'white',
                color: 'black',
                marginBottom: '-20px',
                borderRadius: '11px'
              }}
            >
              {coupon?(
                <p className="is-size-7-mobile has-text-weight-medium is-size-6-tablet">
                  <s className="has-text-grey-light ">{getRoundedPrice(price)} $/{months===1?'M':'Y'}</s>
                  &nbsp;Coupon Applied
                  <br />
                  <br />
                </p>
              ):null}
              $ {getRoundedPrice(price*(1-(discount_percentage/100)))} /{months===1 ? 'MONTH' : 'YEAR'}
            </div>
          </div>
          <div className="has-text-centered is-uppercase" style={{ boxShadow: "0 0" }}>
            <div className="is-padded-top has-text-white has-text-weight-bold is-padded-bottom title has-text-weight-bold is-size-6-mobile">
              {plan_name ? plan_name : 'Select a plan'}
            </div>
          </div>
        </div>
        {nextExist ? (
          <div className="is-padded-top pricing-card is-not-selected">
            <button
              disabled={!valid}
              onClick={()=>nextPageFunction()}
              className="button is-large card-button word-break"
              style={{
                background: 'transparent linear-gradient(180deg, #00AEEB 0%, #82DEFF 100%) 0% 0% no-repeat padding-box'
              }}
            >
              <div className="subtitle has-text-weight-bold is-size-7-mobile is-spaced">
                NEXT
              </div>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}