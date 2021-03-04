import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-5.webp"
import Footer from "../components/Footer"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { graphql } from "gatsby"

const PrivacyPage = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

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