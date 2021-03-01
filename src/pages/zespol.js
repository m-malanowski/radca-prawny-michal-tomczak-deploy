import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-6.webp"
import Footer from "../components/Footer"
import TeamSlider from "../components/TeamSlider"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import TriggerText from "../components/TriggerText"
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
const TeamPage = () => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <div className="team-page">
      <Subheader pageTitle={"Im baby flexitarian art party forage, kinfolk prism overeaćh on vinyl artisan taiyaki tbh"}
                 subImg={subHeaderPhoto} />

      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <motion.p variants={variants} initial="initial" animate="enter">Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                pok pok retro messenger bag health
                goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings direct
                trade kale chips vexillologist schlitz
              </motion.p>
            </div>
            <div className="description-second-element">
              <motion.h2 variants={variants} initial="initial" animate="enter" className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt</em>.</motion.h2>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-wrapper">
        <TriggerText threshold=".5">
          <TeamSlider />
        </TriggerText>
      </div>

      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <TriggerText delay=".2" threshold="0.7">
                <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                  taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                  truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                  loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                  pok pok retro messenger bag health
                </p>
              </TriggerText>
              <br /><br />
              <TriggerText delay=".4" threshold="0.7">
                <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                  taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                  truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                  loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                  pok pok retro messenger bag health
                </p>
              </TriggerText>
            </div>
            <div className="description-second-element">
              {/*<h2 className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt </em> iurx natus*/}
              {/*  perspiciatis soluta.</h2>*/}
            </div>
          </div>

          {/*<ButtonRight/>*/}

        </div>

      </div>
      <Footer />
    </div>
  </>
)

export default TeamPage
