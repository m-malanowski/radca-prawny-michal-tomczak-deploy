import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import "../css/homeSlider.css"
import img1 from "../assets/imgs/elo6.png"
import img2 from "../assets/imgs/home-slider/home-slider-2.png"
import img3 from "../assets/imgs/home-slider/home-slider-3.png"
import Subheader from "./Subheader"
import subHeaderPhoto from "../assets/imitationSub.png"
import Button from "./Button"
import { motion } from "framer-motion"
const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};

const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
]

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow-home arrow-home--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

const  ArrowRight = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow-home arrow-home--right" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}




//
// const positionStyle = (idx) => {
//   if (!details) return {}
//   const position = details.positions[idx]
//   const x = details.widthOrHeight * position.distance
//   const scale_size = 0.7
//   const scale = 1 - (scale_size - scale_size * position.portion)
//   return {
//     transform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
//     WebkitTransform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
//   }
// }


const MainPageSlider2 = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [details, setDetails] = React.useState(null)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    move(s) {
      setDetails(s.details())
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(false)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 8000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div ref={sliderRef} className="keen-slider zoom-out">
        <div style={{ transform: 'translate3d(500px, 0px, 0px) scale(2.2)' }} className="img-wrapper keen-slider__slide home-slider zoom-out__slide">
          <img src={img1} alt="" />
          <div className="page-title container-fluid">
            <div className="col-md-5">
              <motion.h2 className="page-title"
                  initial={{opacity: 0, y: 40}}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {delay: 2.5, ...transition},
                  }}
                  exit={{
                    y: 40,
                    opacity: 0,
                    transition: {delay: .3,  ...transition},
                  }}>
               VHS chartreuse portland photo booth <em>lobotomy and agony freegan fashion</em> axe lo-fi chillwave.  </motion.h2>
              <motion.div
                initial={{opacity: 0, y: 40}}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {delay: 2.8, ...transition},
                }}
                exit={{
                  y: 40,
                  opacity: 0,
                  transition: {  ...transition},
                }}
              >
                <Button url="/zespol" buttonDesc="Zespół"></Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="img-wrapper keen-slider__slide home-slider zoom-out__slide">
          <img src={img2} alt="" />
          <div className="page-title container-fluid">
            <div className="col-md-5">
              <motion.h2 className="page-title"
                         initial={{opacity: 0, y: 40}}
                         animate={{
                           opacity: 1,
                           y: 0,
                           transition: {delay: 2.5, ...transition},
                         }}
                         exit={{
                           y: 40,
                           opacity: 0,
                           transition: {delay: .3,  ...transition},
                         }}>
                VHS chartreuse portland photo booth <em>lobotomy and agony freegan fashion</em> axe lo-fi chillwave.  </motion.h2>
              <motion.div
                initial={{opacity: 0, y: 40}}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {delay: 2.8, ...transition},
                }}
                exit={{
                  y: 40,
                  opacity: 0,
                  transition: {  ...transition},
                }}
              >
                <Button url="/zespol" buttonDesc="Zespół"></Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="img-wrapper keen-slider__slide home-slider zoom-out__slide">
          <img src={img3} alt="" />
          <div className="page-title container-fluid">
            <div className="col-md-5">
              <motion.h2 className="page-title"
                         initial={{opacity: 0, y: 40}}
                         animate={{
                           opacity: 1,
                           y: 0,
                           transition: {delay: 2.5, ...transition},
                         }}
                         exit={{
                           y: 40,
                           opacity: 0,
                           transition: {delay: .3,  ...transition},
                         }}>
                VHS chartreuse portland photo booth <em>lobotomy and agony freegan fashion</em> axe lo-fi chillwave.  </motion.h2>
              <motion.div
                initial={{opacity: 0, y: 40}}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {delay: 2.8, ...transition},
                }}
                exit={{
                  y: 40,
                  opacity: 0,
                  transition: {  ...transition},
                }}
              >
                <Button url="/zespol" buttonDesc="Zespół"></Button>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
      {slider && (
        <>
          <ArrowLeft
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}

    </>
  )
}
export default MainPageSlider2;