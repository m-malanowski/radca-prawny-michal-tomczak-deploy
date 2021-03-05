import React from "react"
import MainPageSlider2 from "../components/MainPageSlider"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { pathVariants, pathVariantsOuter } from "../components/variants"
import letterLogoUpper from "../assets/imgs/logoLetterUpper.svg"
import letterLogoLower from "../assets/imgs/logeLetterLower.svg"

const indexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Radcy Prawnego Michał Tomczak",
    "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=1q5MkFFkEu_U21aiml_JCm_ny1CzfDLhD&usp=sharing",
    "image": "https://radcaprawnytomczak.pl/static/facebook.jpg",
    "@id": "",
    "url": "https://radcaprawnytomczak.pl",
    "telephone": "+ 48 507 455 057",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strzelecka 10/1",
      "addressLocality": "Gdańsk",
      "postalCode": "80-803",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 54.351786175515336,
      "longitude": 18.638663907034715
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "16:00"
    },
    "sameAs": [
      "https://www.google.com/maps/d/u/0/edit?mid=1GCWjyo1AqP3O0iREMdxbuDu-HYKiDmeS&usp=sharing",
      "https://www.facebook.com/Radca-Prawny-Gda%C5%84sk-Micha%C5%82-Tomczak-110583451087567",
      "https://g.page/radca-prawny-tomczak?we"
    ]
  }
  return (
    <>
      <SEO title="⚖️ &nbsp; Radca Prawny Gdańsk Michał Tomczak. Porady Prawne Gdańsk "
           description="Zadzwoń ☎ + 48 507 455 057. Radca Prawny Gdańsk Michał Tomczak - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdańsk"
           schemaMarkup={schema}
      />

      <motion.div
        className="fake-loader-wrapper"
        initial={{ opacity: 1 }}
        animate={{
          // display: 'none',
          opacity: 0,
          // x: "-100%",
          transition: { delay: 3.2, when: "beforeChildren", duration: .4 },
          transitionEnd: {
            display: "none"
          }
        }}
      >
        <svg width={80} height={119} xmlns="http://www.w3.org/2000/svg" className="initialLogo">
          <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M58.209 38.042L40.0002 56.2508L21.7914 38.042H11.4707V41.9622C15.6229 41.9622 19.0006 45.3296 19.021 49.4749V68.5333C19.021 72.6957 15.6331 76.0836 11.4707 76.0836V80.0038H30.4881V78.0454V76.087C26.3257 76.087 22.9412 72.6991 22.9412 68.5367V49.5193C22.9412 49.5057 22.9412 49.4954 22.9412 49.4818V44.7394L40.0002 61.7984L57.0592 44.7394V49.5125C57.0592 49.5159 57.0592 49.5159 57.0592 49.5193V68.5401C57.0592 72.7025 53.6713 76.0904 49.5089 76.0904V80.0106C49.5123 80.0106 49.5123 80.0106 49.5123 80.0106H68.5297V78.0522V76.0938H68.4922C64.3434 76.0734 60.976 72.6923 60.976 68.5435V49.5057C60.9794 45.3433 64.3639 41.9622 68.5263 41.9622V38.042H58.209Z" fill="white"/>
          <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.9593 87.5508H38.0425C38.0425 91.7132 34.6546 95.1011 30.4922 95.1011V99.0213H49.513V95.1011C45.3472 95.1045 41.9593 91.7166 41.9593 87.5508Z" fill="white"/>
          <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.9612 68.5293H38.041V87.5501H41.9612V68.5293Z" fill="white"/>
          <motion.path variants={pathVariantsOuter} initial="hidden" animate="visible" d="M40 0C17.9427 0 0 17.9427 0 40V78.0416C0 88.724 4.1624 98.7718 11.7195 106.325C19.2733 113.879 29.3176 118.042 40 118.042C62.0573 118.042 80 100.099 80 78.0416V40C80 17.9427 62.0573 0 40 0ZM76.0798 78.0416C76.0798 97.9359 59.8942 114.121 40 114.121C30.3651 114.121 21.3033 110.368 14.4899 103.555C7.67315 96.7383 3.92016 87.6766 3.92016 78.0416V40C3.92016 20.1058 20.1058 3.92016 40 3.92016C59.8942 3.92016 76.0798 20.1058 76.0798 40V78.0416Z" fill="white"/>
          <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M30.4881 22.9377H38.0384V49.5089H41.9585V22.9377H49.5089C53.6713 22.9377 57.0592 26.3257 57.0592 30.4881H60.9794V19.0176H49.5089H30.4881H19.0176V30.4881H22.9377C22.9377 26.3257 26.3257 22.9377 30.4881 22.9377Z" fill="white"/>
        </svg>

        <div className="svg-container">
          <motion.img
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 1.8,
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9]
              }
            }}
            src={letterLogoUpper} alt="" />
          <motion.img
            initial={{ y: "100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2,
                duration: 1,
                ease: [0.6, 0.01, -0.05, 0.9]
              }
            }}
            src={letterLogoLower} alt="" />
        </div>

      </motion.div>

      <motion.div
        initial={{opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 3.4,
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9]
          }
        }}
        className="index-page">
        <MainPageSlider2 />
      </motion.div>
    </>
  )
}
export default indexPage
