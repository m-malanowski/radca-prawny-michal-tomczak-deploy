import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import img1 from "../assets/imgs/home-slider/radca-prawny-gdansk-1.webp"
import img2 from "../assets/imgs/home-slider/radca-prawny-gdansk-3.webp"
import img3 from "../assets/imgs/home-slider/radca-prawny-gdansk-5.webp"
import Button from "../components/CtaButton"
import { motion, useAnimation } from "framer-motion"
import { SplitText } from "./SplitText"
import { splitTextVariants } from "./variants"

const images = [
  {
    img: img1,
    title: "Kompleksowa obsługa prawna klientów indywidualnych i przedsiębiorców. Kancelaria Radcy Prawnego Michał  ",
    buttonText: "O kancelarii",
    url: "/radca-prawny-gdansk",
    id: 1,
  },
  {
    img: img2,
    title: "Najlepiej o naszej dobrej pracy świadczy stale powiększające się grono Klientów.",
    buttonText: "Zakres usług",
    url: "/zakres-uslug",
    id: 2,

  },
  {
    img: img3,
    title: "Szukasz rozwiązania swojego problemu? Skontaktuj się ze mną.",
    buttonText: "Umów spotkanie",
    url: "/kontakt",
    id: 3,
  }
]

const ArrowLeft = (props) => {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow-home arrow-home--left" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width="1024"
      height="1024"
    >
      <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z" />
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
      viewBox="0 0 1024 1024"
      width="1024"
      height="1024"
    >
      <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z" />
    </svg>
  )
}

const MainPageSlider = (props) => {
  const [details, setDetails] = React.useState(null)
  const controls = useAnimation()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 2000,
    slides: images.length,
    initial: 0,
    dragSpeed: .3,
    // resetSlide: true,
    vertical: true,

    slideChanged(instance) {
      setCurrentSlide(instance.details().relativeSlide)
      // console.log("slideChanged");
      controls.start("hidden")
    },
    move(instance) {
      setDetails(instance.details())
      // console.log("move");
      setPause(true)
    },
    afterChange: (instance) => {
      // console.log("dragEnd");
      // console.log("afterChange");
      controls.start("visible")
      // controls2.start("visible")
      setPause(false)
    },
  })

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


  function positionStyle(idx) {
    if (!details) return {}
    const position = details.positions[idx]
    const x = details.widthOrHeight * position.distance
    const scaleSize = 0.8
    const scale = 1 - (scaleSize - scaleSize * position.portion)
    const skewSize = 15
    const skew = 0 - (skewSize - skewSize * position.portion)

    return {
      transform: `translate3d(0px, ${x}px, 0px) scale(${scale}) skew(0deg, ${skew}deg)`,
      transition: `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      WebkitTransform: `translate3d(0px, ${x}px, 0px) scale(${scale}) skew($0deg, ${skew}deg)`,
    }
  }
  return (
    <>
      <div ref={sliderRef} className="zoom-out draggable">
        {images.map((item, idx) => (
          <div
            key={idx}
            style={positionStyle(idx)}
            className="zoom-out__slide"
          >
            <motion.img
              initial={{opacity: 0 , scale: 1.2}}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 3.4,
                  duration: 1,
                  ease: [0.6, 0.01, -0.05, 0.9]
                }
              }}
              src={item.img} alt={item.title} />
            <div
              className="index-slider">
              <div className="container-fluid ">
                <div className="col-lg-5 col-12">
                  <h1>
                    <SplitText
                      initial={{ y: "100%" }}
                      animate={controls}
                      exit="hidden"
                      variants={splitTextVariants}
                    >
                      {item.title}
                    </SplitText>
                  </h1>

                  <motion.div
                    animate={controls}
                    exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .6, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: 20, }
                    }}
                  >
                    <Button url={item.url} color={"white"} buttonDesc={item.buttonText}/>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {slider && (
        <div>
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
      {slider && (
        <div

          className="linesWrapper">
          <ul className="lines">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <li
                  className={currentSlide === idx ? " active" : ""}
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                >
                  <a
                    aria-label="Radca prawny Gdańsk - porady prawne"
                    className="lines-item"
                    href="#">
                    <div className="lines-dash"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}
export default MainPageSlider;