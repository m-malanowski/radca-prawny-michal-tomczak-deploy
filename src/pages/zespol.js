import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-6.webp"
import Footer from "../components/Footer"
import TeamSlider from "../components/TeamSlider"
import SEO from "../components/SEO"
// import { motion } from "framer-motion"
import TriggerText from "../components/TriggerText"
import { TriggerSplit } from "../components/TriggerSplit"

const TeamPage = () => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia"
         description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia" />

    <div className="team-page">
      <Subheader pageTitle={"Im baby flexitarian art party forage, kinfolk prism overeaćh on vinyl artisan taiyaki tbh"}
                 subImg={subHeaderPhoto} />

      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <p>
                <TriggerSplit threshold=".5">
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
                </TriggerSplit>
              </p>
            </div>
            <div className="description-second-element">
              <h2 className="quote">
                <TriggerSplit threshold="1">
                  franzen yr, literally beum incidunt iurx natus perspiciatis soluta.
                </TriggerSplit>
              </h2>
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
              <p>
                <TriggerSplit threshold=".5">
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
                </TriggerSplit>
              </p>
              <br /><br />
              <p>
                <TriggerSplit threshold=".8">
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
                </TriggerSplit>
              </p>
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
