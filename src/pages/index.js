import React from "react"
import MainPageSlider2 from "../components/MainPageSlider"
import { motion } from "framer-motion"
import logo from "../assets/imgs/logoNowe.png"
import SEO from "../components/SEO"

const indexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Radcy Prawnego Michał Tomczak",
    "hasMap": "https://www.google.com/maps/d/u/0/edit?mid=1q5MkFFkEu_U21aiml_JCm_ny1CzfDLhD&usp=sharing",
    "image": "https://radcaprawnytomczak.pl/facebook.jpg",
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
      "latitude": 54.34203143971135,
      "longitude": 18.60400830766561
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
      "https://www.google.com/maps/d/u/0/edit?mid=1q5MkFFkEu_U21aiml_JCm_ny1CzfDLhD&usp=sharing"
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
          // opacity: 0,
          y: "-100%",
          transition: { delay: 1, when: "beforeChildren", duration: .5 },
          transitionEnd: {
            display: "none",
          },
        }}
      >
        <motion.p
          animate={{
            opacity: 0,
            y: -20,
            transition: { delay: 2, duration: 1.5 },
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
}
export default indexPage;
