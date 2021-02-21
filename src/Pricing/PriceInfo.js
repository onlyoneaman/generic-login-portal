import React from 'react'

const benefits = [
  "Lorem ipsum dolor sit amet", 
  "consetetur sadipscing elitr", 
  "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat", 
  "sed diam voluptua", 
  "At vero eos et accusam et justo duo dolores et ea"
]

const PriceInfo = () => {
  return(
    <div>
      <h2>
        You Pay 49$ a month for 5 accounts
      </h2>
      <div className="card">
        <div className="card-content">
          <h3>Benefits</h3>
          <ul className="has-text-left">
            {benefits.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
     
      </p>
    </div>
  )
}

export default PriceInfo