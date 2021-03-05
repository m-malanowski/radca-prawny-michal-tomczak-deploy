import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <>
      <SEO title="⚖️ &nbsp; 404" description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk"/>
      <div className="error-page">
        <div>
          <h2>404</h2>
          <h5>Przepraszamy, ale strona której szukasz nie istnieje. Naciśnij przycisk poniżej aby wrócić do strony głównej.</h5>
          <Link to="/"> <p> Wróć na główną</p> </Link>
        </div>
      </div>
    </>
  )
}

export default Error
