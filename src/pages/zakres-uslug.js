import React from "react"
import Layout from "../components/Layout"
import Subheader from "../components/Subheader"
import subHeaderPhoto from "../assets/imgs/home-slider/home-19.jpg"
import Footer from "../components/Footer"
// import Button from "../components/Button"
import StickyBox from "react-sticky-box"
import ButtonRight from "../components/CtaButton"
import Button from "../components/CtaButton"
import { motion } from "framer-motion"
import subsecImg1 from "../assets/imgs/aboutImg1.jpeg"
import SEO from "../components/SEO"
import ServicesSlider from "../components/ServicesSlider"
const variants =  {
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
      when: 'afterChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {delay: 1, duration: .5},
  }
}
const TeamPage = () => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

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
                <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                  taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                  truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                  loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  Asymmetrical franzen yr.
                  <br/><br/>
                  coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                  taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                  truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                  loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                  Asymmetrical franzen yr.


                </p>
              </div>
            <ServicesSlider/>

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
                <h2 className="">Ogólne informacje franzen yr, <em> literally beum incidunt </em> iurx natus
                  perspiciatis soluta.</h2>
                {/*<ul className="services-titles">*/}
                {/*  <li className="active"><h5>Prawo pracy</h5></li>*/}
                {/*  <li><h5>Prawo rodzinne</h5></li>*/}
                {/*  <li><h5>Prawo gospodarcze</h5></li>*/}
                {/*  <li><h5>Prawo adniminstracyjne</h5></li>*/}
                {/*</ul>*/}
              </div>
            </StickyBox>
          </div>
        </div>

        <div className="page-description-wrapper">
          <div className="image-subsection image-subsection__right">
            <motion.img
              src={subsecImg1} alt=""
              // ref={ref}
              // animate={controls}
              initial="visible"
              variants={{
                visible: {
                  opacity: 1, y: 0, clipPath: "circle(250% at 100% 100%)",
                  transition: { delay: .2, duration: 1.8 }
                },
                hidden: { opacity: 0, y: 50 }
              }}
            />
            <div className="image-overlay-text">
              <h2>Lorem ipsum dolor sit amet, <br /> <span>consectetur adipisicing elit.</span> <br /> <span>architecto at libero nostrum.</span>
              </h2>
              <Button classname="mt-5" url="/kontakt" buttonDesc="Umów spotkanie"/>

            </div>
          </div>
        </div>

        <div className="page-description-wrapper">
          <div className="page-content-description">
            <div className="description-first-element">
              <p>Fixie coloring book beard biodiesel leggings four loko, neutra bespoke lyft hashtag. Slow-carb tilde
                taiyaki, tumblr normcore salvia craft beer kitsch brunch franzen gentrify blue bottle viral. Forage
                truffaut cornhole, pitchfork crucifix offal pok pok paleo literally activated charcoal raw denim. Four
                loko franzen chicharrones street art, narwhal man braid kogi hella plaid pour-over.
                Asymmetrical franzen yr, literally bicycle rights cray vexillologist cornhole taiyaki hell of humblebrag
                pok pok retro messenger bag health
                live-edge. Organic thundercats af 8-bit swag hashtag ramps authentic skateboard, cronut meggings
                brooklyn sriracha flexitarian whatever.
              </p>
            </div>
            <div className="description-second-element">
              <h2 className="quote">Etyka pracy literally <em> beum incidunt iurx natus</em> perspiciatis soluta.</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </>
)

export default TeamPage
