import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TeamButton from "./TeamButton"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"


const ArrowLeft = (props) => {
  return (
    <div
      className={"arrow-team arrow--left"}
      onClick={props.onClick}
    >
      <TeamButton
        arrowDirection={"left"}
      />
    </div>
  )
}
const  ArrowRight = (props) => {
  return (

    <div
      className={"arrow-team arrow--right"}
      onClick={props.onClick}
    >
      <TeamButton
        arrowDirection={"right"}
      />
    </div>
  )
}
//
// const  ArrowRight = (props) => {
//   const disabeld = props.disabled ? " arrow--disabled" : ""
//   return (
//     <svg
//       onClick={props.onClick}
//       className={"arrow-team arrow--right" + disabeld}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//     </svg>
//   )
// }

const TeamSlider = ( props ) => {
  const query = useStaticQuery(graphql`
      {
          allStrapiTeams {
              nodes {
                  bio
                  email
                  id
                  name
                  phone
                  position
                  slug
                  image {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  `)
  
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: 3,
    centered: false,
    spacing: 15,
    loop: true,
    progressTrack: 1,
    breakpoints: {
      '(max-width: 901px)': {
        loop: false,
        slidesPerView: 1,
      },
    },
  })

  // React.useEffect(() => {
  //   timer.current = setInterval(() => {
  //     if (!pause && slider) {
  //       slider.next()
  //     }
  //   }, 12000)
  //   return () => {
  //     clearInterval(timer.current)
  //   }
  // }, [pause, slider])


  return (
    <>
      {slider && (
        <div className="arrows-wrapper">
          <ArrowLeft
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </div>
      )}

    <div ref={sliderRef} className="keen-slider team-container">

      {query.allStrapiTeams.nodes.map(member => (
        <div key={member.id} className="member-wrapper keen-slider__slide">
          <div className="img-wrapper">
            {/*<img className="img" src={member.image.childImageSharp.fluid.src} alt={member.name} />*/}
            <Image className="img" fluid={member.image.childImageSharp.fluid}/>
          </div>
          <div>
            <Link to={ member.slug}>
              <h4>{member.name}</h4>
              <p>{ member.position }</p>
            </Link>
          </div>
        </div>
      ))}

        {/*<div className="member-wrapper keen-slider__slide">*/}
        {/*  <div className="img-wrapper">*/}
        {/*    /!*<div className="img"></div>*!/*/}
        {/*    <img src={img2} alt="" />*/}
        {/*  </div>*/}
        {/*  <h4>Imię Nazwisko I</h4>*/}
        {/*  <p>Stanowisko</p>*/}
        {/*</div>*/}

      </div>
      {/*<div className="team-member-modal is-open"/>*/}

    </>
  )
}

export default  TeamSlider