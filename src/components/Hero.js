import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query =  graphql`
    query MyQuery {
        file(relativePath: {eq: "hero-img.png"}){
            childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = () => {
  const {
          file: {childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Elo Elo 3-2-0</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <Link to='/kontakt' className='btn'>Kontakt</Link>
            <SocialLinks></SocialLinks>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
