import React from "react";
import {Helmet} from "react-helmet";
import PropTypes from 'prop-types'

const metaDescription = "Growpad is a tool that helps you grow your instagram account organically, quickly and safely. | Target best people and Gain Quality followers | No Fake Followers"
const defaultTitle = 'Growpad Payment Portal'

function SEO({description, lang, meta, title}) {
  return (
    <Helmet>
      <meta lang={lang} />
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" sizes="16x16" href="./logo.png" />
      <link rel="manifest" href="./site.webmanifest" />
      <meta name="viewport" content="'width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no'" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: metaDescription,
  title: defaultTitle
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
