import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({title, description, schemaMarkup}) => {
  return <Helmet htmlAttributes={{ lang: "pl" }} title={title} >
    <meta name="description" content={description}/>
    <meta property="og:url" content="radcaprawnytomczak.pl" />
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://radcaprawnytomczak.pl/facebook.jpg"/>

    {schemaMarkup &&
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    }

  </Helmet>
}

export default SEO
