import React from "react"
import MainPageSlider2 from "../components/MainPageSlider"
import { motion } from "framer-motion"
import SEO from "../components/SEO"
import { pathVariants, pathVariants2, pathVariantsOuter } from "../components/variants"
import letterLogoUpper from "../assets/imgs/logoLetterUpper.svg"
import letterLogoLower from "../assets/imgs/logeLetterLower.svg"

const indexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Radcy Prawnego Michał Tomczak",
    "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=1q5MkFFkEu_U21aiml_JCm_ny1CzfDLhD&usp=sharing",
    "image": "https://radcaprawnytomczak.pl/facebook-radcaprawny.jpg",
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
        <svg width="80" height="119" xmlns="http://www.w3.org/2000/svg" className="initialLogo">
          <motion.path variants={pathVariants2} initial="hidden" animate="visible" d="M30.487 78.143c-4.162 0-7.546-3.414-7.546-7.614h-.003V51.356h.003c0-.01-.003-.023-.003-.036V46.54l11.298 11.39v-5.59L21.792 39.795H11.469v3.951c2.077 0 3.959.848 5.325 2.22a7.629 7.629 0 012.224 5.355v19.213h.003c0 4.196-3.387 7.61-7.553 7.61v3.952h19.018v-3.953h.001zM68.528 43.745v-3.951H58.21L45.88 52.22v5.59l11.18-11.27v23.993a7.619 7.619 0 01-2.214 5.378 7.498 7.498 0 01-5.335 2.232v3.952H68.53v-3.952h-.036c-4.15-.02-7.516-3.428-7.516-7.614v-19.18c.003-4.193 3.39-7.604 7.55-7.604z" fill="white"/>
          <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.96 89.706V24.569h7.549c2.082 0 3.972.854 5.338 2.232a7.623 7.623 0 012.215 5.382h3.92V20.618H19.018v11.565h3.92c0-4.2 3.387-7.614 7.55-7.614h7.553v65.136c0 4.2-3.387 7.614-7.554 7.614v3.952H49.51v-3.952c-4.163.001-7.55-3.414-7.55-7.614z" fill="white"/>
          {/*<motion.path variants={pathVariants} initial="hidden" animate="visible" d="M41.9612 68.5293H38.041V87.5501H41.9612V68.5293Z" fill="white"/>*/}
          <motion.path variants={pathVariantsOuter} initial="hidden" animate="visible" d="M39.998 0C17.944 0 0 18.09 0 40.327v38.346c0 10.77 4.162 20.899 11.718 28.516C19.271 114.804 29.315 119 39.998 119 62.055 119 80 100.91 80 78.673V40.327C80 18.089 62.055 0 39.998 0zm36.083 78.672c0 20.058-16.187 36.376-36.082 36.376-9.636 0-18.696-3.786-25.51-10.655-6.817-6.87-10.57-16.004-10.57-25.72V40.326C3.92 20.269 20.108 3.952 40 3.952c19.896 0 36.082 16.317 36.082 36.375v38.345z" fill="white"/>
          {/*<motion.path variants={pathVariants} initial="hidden" animate="visible" d="M30.4881 22.9377H38.0384V49.5089H41.9585V22.9377H49.5089C53.6713 22.9377 57.0592 26.3257 57.0592 30.4881H60.9794V19.0176H49.5089H30.4881H19.0176V30.4881H22.9377C22.9377 26.3257 26.3257 22.9377 30.4881 22.9377Z" fill="white"/>*/}
        </svg>

        <div className="svg-container">
          <motion.img
            width="605"
            height="30"
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
            width="477"
            height="16"
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
        style={{overflow: "hidden"}}
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
