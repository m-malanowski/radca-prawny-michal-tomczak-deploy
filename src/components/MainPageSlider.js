import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";
import img1 from "../assets/imgs/home-slider/radca-prawny-gdansk-1.webp"
import img2 from "../assets/imgs/home-slider/radca-prawny-gdansk-3.webp"
import img3 from "../assets/imgs/home-slider/radca-prawny-gdansk-5.webp"
import Button from "../components/CtaButton"
import { motion, useAnimation } from "framer-motion"


const icons = {
  'left': 'M501.333 245.333H36.417L178.21 103.541c4.167-4.167 4.167-10.917 0-15.083-4.167-4.167-10.917-4.167-15.083 0l-160 160c-4.167 4.167-4.167 10.917 0 15.083l160 160a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125 4.167-4.167 4.167-10.917 0-15.083L36.417 266.667h464.917A10.66 10.66 0 00512.001 256a10.662 10.662 0 00-10.668-10.667z',
  'right': 'M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667A10.66 10.66 0 000 256a10.66 10.66 0 0010.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z',
};
const images = [
  {
    img: img1,
    title: "Kompleksowa obsługa prawna klientów indywidualnych i przedsiębiorców. Kancelaria Radcy Prawnego Michał  ",
    // beforeTitle: "Adwkoat Gdynia - Szymon Mikulak ",
    buttonText: "O kancelarii",
    url: "/radca-prawny-gdansk",
    id: 1,
  },
  {
    img: img2,
    title: "Najlepiej o naszej dobrej pracy świadczy stale powiększające się grono Klientów.",
    // beforeTitle: "Zakres Usług",
    buttonText: "Zakres usług",
    url: "/zakres-uslug",
    id: 2,

  },
  {
    img: img3,
    title: "Szukasz rozwiązania swojego problemu? Skontaktuj się ze mną.",
    // beforeTitle: "Pomogę rozwiązać Twój problem",
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
  // const controls2 = useAnimation()
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1500,
    slides: images.length,
    initial: 0,
    slideChanged(instance) {
      setCurrentSlide(instance.details().relativeSlide)
      console.log("slideChanged");
    },
    move(instance) {
      setDetails(instance.details())
      controls.start("hidden")
      console.log("move");
    },
    // beforeChange: (instance) => {
    //   console.log("beforeChange");
    //   controls.start("hidden")
    //   // controls2.start("hidden")
    //   console.log("dragStart");
    // },
    afterChange: (instance) => {
      console.log("dragEnd");
      console.log("afterChange");
      controls.start("visible")
      // controls2.start("visible")
    },
    // slideChanged: (instance) =>{
    //   console.log("slideChanged")
    //   controls.start("visible")
    //   controls.start("hidden")
    //
    // },

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
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * position.portion)
    return {
      transform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
      transition: `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`,
      WebkitTransform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
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
            <img src={item.img} alt={item.title} />

            <motion.div
              exit={{ y: 20, opacity: 0 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: {delay: 2,  duration: 1., ease: [0.6, 0.01, -0.05, 0.9] } }}
              className="index-slider">
              <div className="container-fluid ">
                <div className="col-lg-5 col-12">
                  {/*<motion.p*/}
                  {/*  animate={controls}*/}
                  {/*  // exit={{ y: 20, opacity: 0 }}*/}
                  {/*  variants={{*/}
                  {/*    visible: {*/}
                  {/*      opacity: 1, y: 0,*/}
                  {/*      transition: { delay: .2, duration: .6,  }*/}
                  {/*    },*/}
                  {/*    hidden: { opacity: 0, y: -60, }*/}
                  {/*  }}*/}
                  {/*  className="beforeH1">*/}
                  {/*  {item.beforeTitle}*/}
                  {/*</motion.p>*/}

                  <motion.h1
                    animate={controls}
                    // exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .4, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: -40, }
                    }}
                  >
                    {item.title}
                  </motion.h1>

                  <motion.div
                    animate={controls}
                    // exit={{ y: 20, opacity: 0 }}
                    variants={{
                      visible: {
                        opacity: 1, y: 0,
                        transition: { delay: .6, duration: .6,  }
                      },
                      hidden: { opacity: 0, y: -20, }
                    }}
                  >
                    <Button url={item.url} color={"white"} buttonDesc={item.buttonText}/>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
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
      {slider && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: {delay: 2.2,  duration: 1., ease: [0.6, 0.01, -0.05, 0.9] } }}
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
                    aria-label="Adwokat Gdynia"
                    className="lines-item"
                    href="#">
                    <div className="lines-dash"/>
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </>
  )
}
export default MainPageSlider;