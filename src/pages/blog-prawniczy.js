import React from "react"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import Subheader from "../components/Subheader"
import Footer from "../components/Footer"
import subHeaderPhoto from "../assets/imgs/home-slider/home-6.jpg"
import ButtonRight from "../components/CtaButton"
import SEO from "../components/SEO"

const BlogPrawniczy = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <div className="blog-page">
      <Subheader pageTitle={'Aktualności'} subImg={subHeaderPhoto}/>
      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                Asymmetrical franzen yr.
              </p>

            </div>
            <div className="description-second-element">
              {/*<h2 className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt</em>.</h2>*/}
            </div>
          </div>
        </div>

        <div className="articles-container">
          {data.allStrapiBlogs.nodes.map(blog => (
            <div className="article-wrapper">
              <div className="img-wrapper">
                <Image className="img" fluid={blog.image.childImageSharp.fluid}/>
                {/*<img src={blog.image.childImageSharp.fluid.src} alt="" />*/}
              </div>
              <div className="article-head">
                <h4> <Link to={"/blog-prawniczy/" + blog.slug}>{blog.title}</Link>  </h4>
                <p>{blog.date}</p>
              </div>
              <ButtonRight buttonDesc={"czytaj więcej"} url={blog.slug}/>
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
