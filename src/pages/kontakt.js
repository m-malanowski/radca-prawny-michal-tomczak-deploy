import React from "react"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { commonVariants, splitTextVariants, transition } from "../components/variants"
import { SplitText } from "../components/SplitText"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const icons = {
  "map": "M672 192l-320-128-352 128v768l352-128 320 128 352-128v-768l-352 128zM384 145.73l256 102.4v630.138l-256-102.398v-630.14zM64 236.828l256-93.090v631.8l-256 93.088v-631.798zM960 787.172l-256 93.092v-631.8l256-93.090v631.798z",
  "phone": "M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"
}
const query = graphql`
    {
        file(relativePath: {eq: "imgs/home-slider/radca-prawny-gdansk-9c.webp"}) {
            childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
const Kontakt = () => {
  const {
    file: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery(query)

  return(
    <>
      <SEO title="⚖️ &nbsp; Kontakt | Porady Prawne Gdańsk. Radca Prawny Gdańsk"
           description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk" />
      <div className="contact-page">

        {/*<img className="img" src={contactImg} alt="radca prawny" />*/}
        <Image className="img" fluid={fluid} style={{position: "absolute"}}/>

        <div className="contact-container container-fluid">
          <div className="left-contact">
            {/*<motion.h2 variants={commonVariants} initial="initial" animate="enter" exit="exit">Lorem ipsum dolor sit amet, consectetur adipisicing elit.  nostrum officiis perferendis perspiciatis provident similique!</motion.h2>*/}
            <h2>
              <SplitText
                initial={{ y: "100%" }}
                animate="visible"
                exit="hidden"
                variants={splitTextVariants}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. nostrum officiis perferendis perspiciatis
                provident similique!
              </SplitText>
            </h2>

          </div>
          <div className="right-contact">
            <motion.p variants={commonVariants} initial="initial" animate="enter" exit="exit"><a className="link-hover"
                                                                                                 href="mailto:info@radcaprawnytomczak.pl">info@radcaprawnytomczak.pl</a>
            </motion.p>
            <motion.p variants={commonVariants} initial="initial" animate="enter" exit="exit">
              <svg width="15" height="15" viewBox="0 0 1024 1024">
                <path d={icons.phone} />
              </svg>
              <a className="link-hover" href="tel: + 48 507 455 057">+ 48 507 455 057</a>
            </motion.p>
            <ul>
              <motion.li variants={commonVariants} initial="initial" animate="enter" exit="exit">ul. Strzelecka 10/1
              </motion.li>
              <motion.li variants={commonVariants} initial="initial" animate="enter" exit="exit">80-803 Gdańsk
              </motion.li>
              <motion.li variants={commonVariants} initial="initial" animate="enter" exit="exit">Pomorskie</motion.li>
            </ul>
            <br />
            <motion.p variants={commonVariants} initial="initial" animate="enter" exit="exit">
              <svg width="15" height="15" viewBox="0 0 1024 1024">
                <path d={icons.map} />
              </svg>
              <a className="link-hover" href="https://g.page/radca-prawny-tomczak?we" target="_blank" rel="noopener">Tu
                nas znajdziesz</a>
            </motion.p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Kontakt
