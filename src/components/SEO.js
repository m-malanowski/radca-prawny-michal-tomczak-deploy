import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({title, description, schemaMarkup}) => {
  return <Helmet htmlAttributes={{ lang: "pl" }} title={title} >
    <meta name="description" content={description}/>

    {schemaMarkup &&
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    }

  </Helmet>
}

export default SEO
