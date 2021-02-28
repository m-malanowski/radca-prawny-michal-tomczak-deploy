import React from "react"
import Layout from "../components/Layout"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-2.jpg"
import img1 from "../assets/imgs/team/member1.jpg"
import img2 from "../assets/imgs/team/member2.jpg"
import img3 from "../assets/imgs/team/member3.jpg"
import Footer from "../components/Footer"
import TeamSlider from "../components/TeamSlider"
import ButtonRight from "../components/CtaButton"
import SEO from "../components/SEO"

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
              <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                pok pok retro messenger bag health
                goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings direct
                trade kale chips vexillologist schlitz
              </p>
            </div>
            <div className="description-second-element">
              {/*<h2 className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt</em>.</h2>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="slider-wrapper">
        <TeamSlider />
      </div>

      <div className="page-content container-fluid">
        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                pok pok retro messenger bag health
              </p>
              <br /><br />
              <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings direct
                trade kale chips vexillologist schlitz
              </p>
            </div>
            <div className="description-second-element">
              <h2 className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt </em> iurx natus
                perspiciatis soluta.</h2>

              {/*<div className="some-details">*/}
              {/*  <div>*/}
              {/*    <span>*/}
              {/*      34*/}
              {/*    </span>*/}
              {/*    <p>Viral 8-bit squid </p>*/}
              {/*    <div className="line"/>*/}
              {/*  </div>*/}
              {/*</div>*/}

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
