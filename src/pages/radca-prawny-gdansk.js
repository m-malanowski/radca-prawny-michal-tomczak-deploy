import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-1.webp"
import aboutImg1 from "../assets/imgs/home-slider/porady-prawne-gdansk.webp"
import aboutImg2 from "../assets/imgs/home-slider/porady-prawne-gdansk-2.webp"
import Image from "gatsby-image"
import Footer from "../components/Footer"
import Button from "../components/CtaButton"
// import { useInView } from "react-intersection-observer"
// import { motion, useAnimation } from "framer-motion"
import TriggerText from "../components/TriggerText"
import TriggerImg from "../components/TriggerImg"
import SEO from "../components/SEO"
// import { commonVariants, splitTextVariants } from "../components/variants"
import { TriggerSplit } from "../components/TriggerSplit"
const subHeaderImageName = "radca-prawny-gdansk-1.webp"
//
// const query = graphql`
//     query ($path: String="imgs/home-slider/radca-prawny-gdansk-1.webp") {
//         file(relativePath: { eq: $path }){
//             childImageSharp {
//                 fluid{
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `

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

  // const controls = useAnimation()
  // const controls2 = useAnimation()
  //
  // const [ref, inView] = useInView({
  //   threshold: .5,
  //   triggerOnce: false})
  // const [ref2, inView2] = useInView({
  //   threshold: .5,
  //   triggerOnce: false
  // })
  //
  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible")
  //   }
  //   if (inView2) {
  //     controls2.start("visible")
  //   }
  // }, [controls, inView, controls2, inView2])

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
                <p>
                  <TriggerSplit threshold=".5">
                    leggings four loko, neutra bespoke lyft hashtag.
                    Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue
                    bottle
                    viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                    raw denim.
                    Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings
                    direct
                    trade kale chips vexillologist schlitz.
                    Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                    Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                    cold-pressed williamsburg selfies live-edge butcher tacos
                  </TriggerSplit>
                </p>
                <br /><br />
                <p>
                  <TriggerSplit threshold=".5">
                    leggings four loko, neutra bespoke lyft hashtag.
                    Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue
                    bottle
                    viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                    raw denim.
                    Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings
                    direct
                    trade kale chips vexillologist schlitz.
                    Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                    Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                    cold-pressed williamsburg selfies live-edge butcher tacos
                  </TriggerSplit>
                </p>

              </div>
              <div className="description-second-element">
                {/*<motion.h2 variants={commonVariants} initial="initial" animate="enter" className="quote">Ogólne informacje*/}
                {/*  franzen yr, <em> literally beum incidunt </em> iurx natus perspiciatis soluta.*/}
                {/*</motion.h2>*/}
                <h2 className="quote">
                  <TriggerSplit
                    threshold="1"
                    // initial={{ y: "100%" }}
                    // animate="visible"
                    // exit="hidden"
                    // variants={splitTextVariants}
                  >
                    franzen yr, literally beum incidunt iurx natus perspiciatis soluta.
                  </TriggerSplit>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="page-description-wrapper">
          <div className="image-subsection image-subsection__right">

            <TriggerImg>
              <img src={aboutImg1} alt="Radca prawny Gdańsk" />
            </TriggerImg>

            <div className="image-overlay-text">
              {/*<TriggerText delay=".4" threshold="0.7">*/}
              {/*<h3>Lorem ipsum dolor sit amet, <br /> <em>consectetur adipisicing elit.</em> <br /> <span>architecto at libero nostrum.</span>*/}
              {/*</h3>*/}
              <h3>
                <TriggerSplit
                  threshold="1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. architecto at libero nostrum.
                </TriggerSplit>
              </h3>
              {/*</TriggerText>*/}
              <Button classname="mt-5" url="/zespol" buttonDesc="Zespół" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="page-description-wrapper">
            <div className="page-content-description">
              <div className="description-first-element">
                <p>
                  <TriggerSplit threshold=".5">
                    leggings four loko, neutra bespoke lyft hashtag.
                    Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue
                    bottle
                    viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                    raw denim.
                    Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings
                    direct
                    trade kale chips vexillologist schlitz.
                    Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                    Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                    cold-pressed williamsburg selfies live-edge butcher tacos
                  </TriggerSplit>
                </p>
                <br /><br />
                <p>
                  <TriggerSplit threshold=".5">
                    leggings four loko, neutra bespoke lyft hashtag.
                    Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue
                    bottle
                    viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                    raw denim.
                    Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings
                    direct
                    trade kale chips vexillologist schlitz.
                    Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                    Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                    cold-pressed williamsburg selfies live-edge butcher tacos
                  </TriggerSplit>
                </p>
              </div>
              <div className="description-second-element">
                <TriggerText delay=".4" threshold="0.7">
                  {/*<h2 className="quote">Etyka pracy literally <em> beum incidunt iurx natus</em> perspiciatis soluta.*/}
                  {/*</h2>*/}
                  <h3 className="quote">
                    <TriggerSplit
                      threshold="1"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. architecto at libero nostrum.
                    </TriggerSplit>
                  </h3>
                </TriggerText>
              </div>
            </div>
          </div>
        </div>

        <div className="page-description-wrapper">
          <div className="image-subsection image-subsection__left">

            <TriggerImg>
              <img src={aboutImg2} alt="Radca prawny Gdańsk" />
              {/*<Image className="img" fluid={fluid} style={{overflow: "visible", position: "static"}}/>*/}
            </TriggerImg>

            <div className="image-overlay-text">
              {/*<TriggerText delay=".4" threshold="0.7">*/}
              {/*<h3>Lorem ipsum dolor sit amet, <br /> <em>consectetur adipisicing elit.</em> <br /> <span>architecto at libero nostrum.</span>*/}
              {/*</h3>*/}
              <h3>
                <TriggerSplit
                  threshold="1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. architecto at libero nostrum.
                </TriggerSplit>
              </h3>
              {/*</TriggerText>*/}
              <Button classname="mt-5" url="/zespol" buttonDesc="Zespół" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="page-description-wrapper">
            <div className="page-content-description">
              <div className="description-first-element">
                <p>
                  <TriggerSplit threshold=".5">
                    leggings four loko, neutra bespoke lyft hashtag.
                    Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue
                    bottle
                    viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal
                    raw denim.
                    Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                    goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings
                    direct
                    trade kale chips vexillologist schlitz.
                    Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha.
                    Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast
                    cold-pressed williamsburg selfies live-edge butcher tacos
                  </TriggerSplit>
                </p>
              </div>
              <div className="description-second-element">
                {/*<TriggerText delay=".4" threshold="0.7">*/}
                {/*<h2 className="quote">Wynagrodzenie literally beum <em>incidunt iurx</em> natus perspiciatis soluta.*/}
                {/*</h2>*/}
                {/*</TriggerText>*/}
                <h3 className="quote">
                  <TriggerSplit threshold="1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. architecto at libero nostrum.
                  </TriggerSplit>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
// export const query = graphql`
//     query ($path: String="imgs/home-slider/radca-prawny-gdansk-1.webp") {
//       file(relativePath: { eq: $path }){
//             childImageSharp {
//                 fluid{
//                     ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
// `

export default ProjectsPage
