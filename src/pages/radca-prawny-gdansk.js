import React, { useEffect, useRef } from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-1.webp"
import aboutImg1 from "../assets/imgs/aboutImg1.jpeg"
import aboutImg2 from "../assets/imgs/home-slider/porady-prawne-gdansk.webp"
// import Image from "gatsby-image"
import Footer from "../components/Footer"
import Button from "../components/CtaButton"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import TriggerText from "../components/TriggerText"
// import TriggerImg from "../components/TriggerImg"
import SEO from "../components/SEO"

// const query = graphql`
//     {
//         file(relativePath: { eq: "imgs/home-slider/1.png" }){
//             childImageSharp {
//                 fluid{
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `

const variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: 3.5,
      when: "afterChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: { delay: 1, duration: .5 }
  }
}

const ProjectsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kancelaria Radcy Prawnego Michał Tomczak",
    "alternateName": "Radca Prawnyy Gdańsk",
    "url": "https://radcaprawnytomczak.pl",
    "logo": "https://radcaprawnytomczak.pl/facebook.jpg",
    "sameAs": [
      "https://www.google.com/maps/d/u/0/edit?mid=1q5MkFFkEu_U21aiml_JCm_ny1CzfDLhD&usp=sharing"
    ]
  }
  // const {
  //   file: {
  //     childImageSharp: { fluid }
  //   }
  // } = useStaticQuery(query)

  // const ref2 = useRef(null)

  const controls = useAnimation()
  const controls2 = useAnimation()

  const [ref, inView] = useInView({
    threshold: .5,
    triggerOnce: false})
  const [ref2, inView2] = useInView({
    threshold: .5,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (inView2) {
      controls2.start("visible")
    }
  }, [controls, inView, controls2, inView2])

  return (
    <>
      <SEO title="⚖️ &nbsp; O Kancelarii | Porady Prawne Gdańsk. Radca Prawny Gdańsk"
           description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk"
           schemaMarkup={schema} />

      <div className="about-page">
        <Subheader pageTitle={"Kancelaria Radcy Prawnego Michał Tomczak "} subImg={subHeaderPhoto} />
        <div className="page-content container-fluid">
          <div className="page-description-wrapper">
            <div className="page-content-description">
              <div className="description-first-element">
                <motion.p variants={variants} initial="initial" animate="enter">Fixie coloring book beard biodiesel
                  leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde taiyaki, tumblr normcore salvia craft
                  beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix
                  offal pok pok paleo literally activated charcoal raw denim. Four loko franzen chicharrones street art,
                  narwhal man braid kogi hella plaid pour-over.
                  Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of
                  humblebrag pok pok retro messenger bag health
                  goth.
                </motion.p>
                <br /><br />
                <motion.p variants={variants} initial="initial" animate="enter">Fixie coloring book beard biodiesel
                  leggings four loko, neutra bespoke lyft hashtag.
                  Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle
                  viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                  raw denim.
                  Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings direct
                  trade kale chips vexillologist schlitz.
                  Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                  Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                  cold-pressed williamsburg selfies live-edge butcher tacos
                </motion.p>
              </div>
              <div className="description-second-element">
                <motion.h2 variants={variants} initial="initial" animate="enter" className="quote">Ogólne informacje
                  franzen yr, <em> literally beum incidunt </em> iurx natus perspiciatis soluta.
                </motion.h2>
              </div>
            </div>
          </div>
        </div>


        <div className="page-description-wrapper">
          <div className="image-subsection image-subsection__right">
            <motion.img
              src={aboutImg2} alt=""
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                // visible: {
                //   opacity: 1, y: 0, clipPath: "circle(250% at 100% 100%)",
                //   transition: { delay: .2, duration: 1.8 }
                // },
                // hidden: { opacity: 0, y: 50 }
                visible: { opacity: 1, y: 0, clipPath: "circle(250% at 100% 100%)",
                  transition: { delay: .2, duration: 2.2}
                },
                hidden: { opacity: 0, y: -20, clipPath: "circle(16.2% at 48% 0)" }
              }}
            />
            <div className="image-overlay-text">
              <TriggerText delay=".4" threshold="0.7">
                <h3>Lorem ipsum dolor sit amet, <br /> <em>consectetur adipisicing elit.</em> <br /> <span>architecto at libero nostrum.</span>
                </h3>
              </TriggerText>
              <Button classname="mt-5" url="/zespol" buttonDesc="Zespół" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="page-description-wrapper">
            <div className="page-content-description">
              <div className="description-first-element">
                <TriggerText delay=".4" threshold="0.7">
                  <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb
                    tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral.
                    Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw
                    denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of
                    humblebrag pok pok retro messenger bag health
                    live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings
                    brooklyn sriracha flexitarian whatever.
                  </p>
                  <br /><br />
                  <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb
                    tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral.
                    Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw
                    denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  </p>
                </TriggerText>
              </div>
              <div className="description-second-element">
                <TriggerText delay=".4" threshold="0.7">
                  <h2 className="quote">Etyka pracy literally <em> beum incidunt iurx natus</em> perspiciatis soluta.
                  </h2>
                </TriggerText>
              </div>
            </div>
          </div>
        </div>

        <div className="page-description-wrapper">
          <div className="image-subsection image-subsection__left">
            <motion.img
              src={aboutImg2} alt=""
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={{
                visible: { opacity: 1, y: 0, clipPath: "circle(250% at 100% 100%)",
                  transition: { delay: .2, duration: 2.2}
                },
                hidden: { opacity: 0, y: -20, clipPath: "circle(16.2% at 48% 0)" }
              }}
            />

            <div className="image-overlay-text">
              <TriggerText delay=".4" threshold="0.7">
                <h3>Lorem ipsum dolor sit amet, <br /> <em>consectetur adipisicing elit.</em> <br /> <span>architecto at libero nostrum.</span>
                </h3>
              </TriggerText>
              <Button classname="mt-5" url="/zespol" buttonDesc="Zespół" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="page-description-wrapper">
            <div className="page-content-description">
              <div className="description-first-element">
                <TriggerText delay=".4" threshold="0.7">
                  <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb
                    tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral.
                    Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw
                    denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings
                    brooklyn sriracha flexitarian whatever.
                  </p>
                </TriggerText>
                <br /><br />
                <TriggerText delay=".4" threshold="0.7">
                  <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb
                    tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral.
                    Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw
                    denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings
                    brooklyn sriracha flexitarian whatever.
                  </p>
                </TriggerText>
              </div>
              <div className="description-second-element">
                <TriggerText delay=".4" threshold="0.7">
                  <h2 className="quote">Wynagrodzenie literally beum <em>incidunt iurx</em> natus perspiciatis soluta.
                  </h2>
                </TriggerText>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ProjectsPage
