import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"
import img1 from "../assets/imgs/sub2.jpg"
import CtaButton from "../components/CtaButton"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  return <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <Helmet   bodyAttributes={{
      id: 'article-page'
    }}   />
    <div className="article-page">

      <div className="page-content container-fluid">
        <div className="article-image img-wrapper">
            {/*<img className="img" src={img1} alt="" />*/}
          <Image className="img" fluid={data.blog.image.childImageSharp.fluid}/>
        </div>

        <div className="article">
          <div className="article-header">
            <div>
              <h1>{ data.blog.title }</h1>
              <em>{ data.blog.date }</em>
            </div>
          </div>
          <br/>

          <article className="mt-5">
            <ReactMarkdown source={ data.blog.content }/>
          </article>

          <div className="back-button">
            {/*<p><Link className="link-hover-dark" to="/blog-prawniczy">wstecz</Link></p>*/}
            <CtaButton arrowDirection="left" buttonDesc="powrót" url="/blog-prawniczy"/>
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
