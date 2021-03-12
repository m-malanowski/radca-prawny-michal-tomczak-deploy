import React from "react"
import Subheader from "../components/Subheader"
import Footer from "../components/Footer"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
// import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-5.webp"
const subHeaderPhoto = "radca-prawny-gdansk-b.webp"

const PrivacyPage = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; Polityka Prywatności | Porady Prawne Gdańsk. Radca Prawny Gdańsk"
         description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk" />

    <div className="policy-page">
      <Subheader pageTitle={'Polityka prywatności'} subImg={subHeaderPhoto}/>
      <div className="page-content container-fluid">
          <article>
            <ReactMarkdown source={data.strapiPrivatePolicy.content}/>
          </article>
      </div>
      <Footer />
    </div>
  </>
)
export const query = graphql`
    {
        strapiPrivatePolicy {
            content
        }
    }
`

export default PrivacyPage;