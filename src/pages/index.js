import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import Subheader from "../components/Subheader"
import MainPageSlider2 from "../components/MainPageSlider"
import { motion } from "framer-motion"
import logo from "../assets/imgs/tomczakNoweLogo.png"
import SEO from "../components/SEO"
// export default () => {
//   return <Layout>
//     <div className="index-page">
//
//     {/*<Subheader pageTitle={'Im baby flexitarian art party forage, kinfolk prism overeaćh on vinyl artisan taiyaki tbh'}></Subheader>*/}
//
//     <MainPageSlider2/>
//
//     </div>
//   </Layout>
// }
// ...GatsbyImageSharpFluid

const indexPage = () => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <motion.div
      className="fake-loader-wrapper"
      initial={{opacity: 1}}
      animate={{
        // display: 'none',
        // opacity: 0,
        y: "-100%",
        transition: {delay: 1, when: "beforeChildren", duration: .5},
        transitionEnd: {
          display: "none",
        },
      }}
    >
      <motion.p
        animate={{
          opacity: 0,
          y: -20,
          transition: {delay: 2, duration: 1.5},
        }}
      >
        <img src={logo} alt="Radca Prawny Michał Tomczak" />
      </motion.p>
    </motion.div>


    <div className="index-page">
      <MainPageSlider2 />
    </div>
  </>
)
export default indexPage;
