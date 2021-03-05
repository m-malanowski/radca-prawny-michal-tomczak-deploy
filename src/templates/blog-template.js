import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import CtaButton from "../components/CtaButton"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"

const ComponentName = ({ data }) => {
  return <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <Helmet   bodyAttributes={{
      id: 'article-page'
    }}   />
    <div className="article-page">

      <div className="page-content container-fluid">
        <div className="article-image img-wrapper">
          <TriggerText delay=".1" threshold="0.4">
            <Image className="img" fluid={data.blog.image.childImageSharp.fluid}/>
          </TriggerText>
        </div>

        <div className="article">
          <div className="article-header">
            <div>
              <TriggerText threshold=".5">
                <h1>{ data.blog.title }</h1>
              </TriggerText>
              <TriggerText threshold="1" delay=".2">
                <em className="em-bt">{ data.blog.date }</em>
              </TriggerText>

            </div>
          </div>
          <br/>

          <article className="mt-5">
            <TriggerText threshold="1" delay=".4">
             <ReactMarkdown source={ data.blog.content }/>
            </TriggerText>
          </article>

          <div className="back-button">
            <TriggerText threshold=".5" delay=".6">
              <CtaButton arrowDirection="left" buttonDesc="powrót" url="/blog-prawniczy"/>
            </TriggerText>
          </div>

        </div>
      </div>
    </div>
  </>
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      date(formatString: "DD MMMM YYYY", locale: "pl")
      image {
          childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
          }
      }     
    }
  }
`

export default ComponentName
