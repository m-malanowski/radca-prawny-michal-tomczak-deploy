import React from "react"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import Subheader from "../components/Subheader"
import Footer from "../components/Footer"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-2c.webp"
import ButtonRight from "../components/CtaButton"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"
import { TriggerSplit } from "../components/TriggerSplit"

const BlogPrawniczy = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; Blog Prawniczy | Porady Prawne Gdańsk. Radca Prawny Gdańsk"
         description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk" />

    <div className="blog-page">
      <Subheader pageTitle={'Aktualności'} subImg={subHeaderPhoto}/>
      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <p>
                <TriggerText threshold=".5">
                  leggings four loko, neutra bespoke lyft hashtag.
                  Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle
                  viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                  raw denim.
                  Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                </TriggerText>
              </p>
            </div>
            <div className="description-second-element">
              {/*<h2 className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt</em>.</h2>*/}
            </div>
          </div>
        </div>

        <div className="articles-container">
          {data.allStrapiBlogs.nodes.map(blog => (
            <div
              key={blog.id}
              className="article-wrapper">
              <div className="img-wrapper">
                <TriggerText delay=".2" threshold="0.4">
                  <Image className="img" fluid={blog.image.childImageSharp.fluid}/>
                </TriggerText>
                {/*<img src={blog.image.childImageSharp.fluid.src} alt="" />*/}
              </div>
              <TriggerText delay=".2" threshold="0.7">
                <div className="article-head">
                  <h4> <Link to={"/blog-prawniczy/" + blog.slug}>{blog.title}</Link>  </h4>
                  <p>{blog.date}</p>
                </div>
              </TriggerText>
              <TriggerText delay=".2" threshold="0.7">
                <ButtonRight buttonDesc={"czytaj więcej"} url={blog.slug}/>

              </TriggerText>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Footer />
  </>
)
export const query = graphql`
    {
        allStrapiBlogs(sort: {order: DESC, fields: date}) {
            nodes {
                slug
                date(formatString: "DD MMMM YYYY", locale: "pl")
                title
                content
                id
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default BlogPrawniczy
