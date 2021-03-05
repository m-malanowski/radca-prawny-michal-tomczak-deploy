import React from "react"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/radca-prawny-gdansk-3.webp"
import Footer from "../components/Footer"
import StickyBox from "react-sticky-box"
import Button from "../components/CtaButton"
import SEO from "../components/SEO"
import ServicesSlider from "../components/ServicesSlider"
import TriggerText from "../components/TriggerText"
import { TriggerSplit } from "../components/TriggerSplit"
import TriggerImg from "../components/TriggerImg"
import aboutImg2 from "../assets/imgs/home-slider/porady-prawne-gdansk-3.webp"

const TeamPage = () => (
  <>
    <SEO title="⚖️ &nbsp; Zakres Usług | Porady Prawne Gdańsk. Radca Prawny Gdańsk"
         description="Zadzwoń ☎ 507 455 057. Radca Prawny Gdańsk - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk" />

    <div className="services-page">
      <Subheader pageTitle={"Zakres naszych usług, zapoznaj się z naszymi usługami"} subImg={subHeaderPhoto} />
      <div className="page-content container-fluid">

        {/*<div className="page-description-wrapper">*/}
        {/*  <div className="page-content-description">*/}
        {/*    <div className="description-first-element">*/}
        {/*      <motion.p variants={variants} initial="initial" animate="enter">Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
        {/*        Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag pok pok retro messenger bag health*/}
        {/*        goth.*/}
        {/*      </motion.p>*/}
        {/*      <br/><br/>*/}
        {/*      <motion.p variants={variants} initial="initial" animate="enter">Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag.*/}
        {/*        Slow-carb tilde taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim.*/}
        {/*        Four loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
        {/*        goth. Pop-up normcore health goth, trust fund iceland tumblr cloud bread cornhole VHS meggings direct trade kale chips vexillologist schlitz.*/}
        {/*        Next level artisan four dollar toast occupy, mumblecore green juice XOXO polaroid cornhole kombucha. Activated charcoal next level vinyl migas, unicorn meggings organic flannel four dollar toast cold-pressed williamsburg selfies live-edge butcher tacos*/}
        {/*      </motion.p>*/}
        {/*    </div>*/}
        {/*    <div className="description-second-element">*/}
        {/*      <motion.h2 variants={variants} initial="initial" animate="enter" className="quote">Ogólne informacje franzen yr, <em> literally beum incidunt </em> iurx natus perspiciatis soluta.</motion.h2>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="services-wrapper">
          <div className="service-container">
            <div className="single-service">
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
            <TriggerText delay=".8" threshold="0.5">
              <ServicesSlider />
            </TriggerText>

            {/*  <div className="single-service">*/}
            {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde*/}
            {/*      taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage*/}
            {/*      truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four*/}
            {/*      loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
            {/*      Asymmetrical franzen yr.</p>*/}
            {/*  </div>*/}
            {/*  <div className="single-service">*/}
            {/*    /!*<div className="line"/>*!/*/}
            {/*    <h2>Prawo pracy</h2>*/}
            {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde*/}
            {/*      taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage*/}
            {/*      truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four*/}
            {/*      loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
            {/*      Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag*/}
            {/*      pok pok retro messenger bag health*/}
            {/*      live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings*/}
            {/*      brooklyn sriracha flexitarian whatever.*/}
            {/*    </p>*/}
            {/*    <ButtonRight url="/kontakt" buttonDesc="Umów spotkanie" />*/}

            {/*  </div>*/}

            {/*  <div className="single-service">*/}
            {/*    /!*<div className="line"/>*!/*/}
            {/*    <h2>Prawo rodzinne</h2>*/}
            {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde*/}
            {/*      taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage*/}
            {/*      truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four*/}
            {/*      loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
            {/*      Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag*/}
            {/*      pok pok retro messenger bag health*/}
            {/*      live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings*/}
            {/*      brooklyn sriracha flexitarian whatever.*/}
            {/*    </p>*/}
            {/*    <ButtonRight url="/kontakt" buttonDesc="Umów spotkanie" />*/}

            {/*  </div>*/}

            {/*  <div className="single-service">*/}
            {/*    /!*<div className="line"/>*!/*/}
            {/*    <h2>Prawo gospodarcze</h2>*/}
            {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde*/}
            {/*      taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage*/}
            {/*      truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four*/}
            {/*      loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
            {/*      Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag*/}
            {/*      pok pok retro messenger bag health*/}
            {/*      live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings*/}
            {/*      brooklyn sriracha flexitarian whatever.*/}
            {/*    </p>*/}
            {/*    <ButtonRight url="/kontakt" buttonDesc="Umów spotkanie" />*/}

            {/*  </div>*/}
            {/*  <div className="single-service">*/}
            {/*    /!*<div className="line"/>*!/*/}
            {/*    <h2>Prawo administracyjne</h2>*/}
            {/*    <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde*/}
            {/*      taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage*/}
            {/*      truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four*/}
            {/*      loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.*/}
            {/*      Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag*/}
            {/*      pok pok retro messenger bag health*/}
            {/*      live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings*/}
            {/*      brooklyn sriracha flexitarian whatever.*/}
            {/*    </p>*/}
            {/*    <ButtonRight url="/kontakt" buttonDesc="Umów spotkanie" />*/}
            {/*  </div>*/}
          </div>

          <div className="specialization-container">
            <StickyBox offsetTop={50} offsetBottom={50}>
              <div className="quote">
                <h2>
                  <TriggerSplit threshold="1">
                    franzen yr, literally beum incidunt iurx natus perspiciatis soluta.
                  </TriggerSplit>
                </h2>
              </div>
            </StickyBox>
          </div>
        </div>
      </div>

      <div className="page-description-wrapper">
        <div className="image-subsection image-subsection__right">
          <TriggerImg threshold="1">
            <img src={aboutImg2} alt="Radca prawny Gdańsk" />
          </TriggerImg>

          <div className="image-overlay-text">
            <h3>
              <TriggerSplit threshold="0.7">
                franzen yr, literally beum incidunt iurx natus perspiciatis soluta.
              </TriggerSplit>
            </h3>
            <Button classname="mt-5" url="/kontakt" buttonDesc="Umów spotkanie" />

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
              <br/><br/>
              <p>
                <TriggerSplit threshold=".7">
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
    </div>
    <Footer />
  </>
)

export default TeamPage
