import React from "react"
import Layout from "../components/Layout"
import overlay from "../assets/overlay.svg"
// import overlay from "../assets/imgs/monogram.png"
import { motion } from "framer-motion";
import SEO from "../components/SEO"
import contactImg from "../assets/imgs/home-slider/radca-prawny-gdansk-3.jpg";

const icons = {
  'map': 'M672 192l-320-128-352 128v768l352-128 320 128 352-128v-768l-352 128zM384 145.73l256 102.4v630.138l-256-102.398v-630.14zM64 236.828l256-93.090v631.8l-256 93.088v-631.798zM960 787.172l-256 93.092v-631.8l256-93.090v631.798z',
  'phone': 'M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z',
};
const transition = {delay: 1, duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};
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
      delay: 1.,
      when: 'afterChildren',
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {delay: .5, duration: .5},
  },
}


const kontakt = () => (
   <>
     <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

     <div className="contact-page">

      {/*<div className="contact-img">*/}
      {/*  <motion.img variants={variants} initial="initial" animate="enter"  exit="exit" src={overlay} alt="elo" />*/}
      {/*</div>*/}
      <img src={contactImg} alt="radca prawny" />

      <div className="contact-container container-fluid">
        <div className="left-contact">
          <motion.h2 variants={variants} initial="initial" animate="enter" exit="exit">Lorem ipsum dolor sit amet, consectetur adipisicing elit.  nostrum officiis perferendis perspiciatis provident similique!</motion.h2>
        </div>
        <div className="right-contact">
          <motion.p variants={variants} initial="initial" animate="enter"  exit="exit"><a className="link-hover" href="mailto:info@radcaprawnytomczak.pl">info@radcaprawnytomczak.pl</a></motion.p>
          <motion.p variants={variants} initial="initial" animate="enter"  exit="exit">
            <svg width="15" height="15" viewBox="0 0 1024 1024">
              <path d={icons.phone}/>
            </svg>
            <a className="link-hover" href="tel: + 48 507 455 057">+ 48 507 455 057</a>
          </motion.p>
          <ul >
            <motion.li variants={variants} initial="initial" animate="enter" exit="exit">Księdza Robaka 1</motion.li>
            <motion.li variants={variants} initial="initial" animate="enter" exit="exit">80-119, Gdańsk</motion.li>
            <motion.li variants={variants} initial="initial" animate="enter" exit="exit">Pomorskie</motion.li>
          </ul>
          <br/>
          <motion.p variants={variants} initial="initial" animate="enter"  exit="exit">
            <svg width="15" height="15" viewBox="0 0 1024 1024">
              <path d={icons.map}/>
            </svg>
            <a className="link-hover" href="https://g.page/radca-prawny-tomczak?we" target="_blank" rel="noopener">Tu nas znajdziesz</a>
          </motion.p>
        </div>
      </div>
    </div>
  </>
)

export default kontakt
