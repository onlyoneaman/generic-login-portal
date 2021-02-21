import React from 'react'
import { Helmet } from 'react-helmet'

const PageSeo = ({title = "Growpad"}) => {
  return(
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  )
}

export default PageSeo