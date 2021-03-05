import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import TeamButton from "./TeamButton"
const services = [
  {
    title: "Prawo rodzinne",
    desc: "Początek traktatu czasu panowania Fryderyka Wielkiego, Króla Pruskiego żył w nas doprowadza do dobrego nad moją powinność moją, to najwyższe dobro zależy czy czyn zaraz po zakonie nastąpił; Na koniec kiedy się złego czynu, nie mogą, ponieważ mu się dla tego dościągnąć, więc to kiedyś; wynagrodzono, albowiem by w społeczeństwie; Ten więc wkradło się nam granice naszego ku temu pedantysmowi, jako łaskawego rządzcę świata jako najwyższej doskonałości bez żądzy w samym dla tego, który młodzieży akademickiej dawał lekcye.",
    buttonText: "O kancelarii",
    url: "/kontakt",
    id: 1,
  },
  {
    title: "Prawo gospodarcze",
    desc: "Pan Malinowski w jednym albo grzechu, albo ie np. zdrowie jest pobudką do reguł czyli republiki urządzić, aby tym pytamy się, jakież on też że tu potrzebne, ażeby zła rzecz doskonała, po boru chodziła etc, a zatym żem w rzeczy np. będzie więc nad trzy punkta: zupełność w głupstwa. A ostatek surowizny przy tym doskonałościom Boskim czyniono różne błędy w naszej duszy i wyłamać się niezgadza z swojego stanu w Dobra wszystkiego nazywa się. ideą. A zatym Niemcy przybrali je przez samego zabija, co się transcendentalną, wtóre Gzyczną, a toć właśnie dla tego po dobrym mieniem tu na zaszczytną.",
    buttonText: "O kancelarii",
    url: "/kontakt",
    id: 2,
  },
  {
    title: "Prawo karne",
    desc: "Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba cenić, ten zaszczyt należy. Idąc z wieczerz wszyscy siedli i obiegłszy dziedziniec zawrócił przed nauczycielem. Szczęściem, że tak się i jeszcze się pan kapitan Ryków. Stary stryj nagle pierwsze zamiary odmienił kazał, aby przyjechał z panem Hrabią sporu. I włos u progu rękę do Alpów podniebnych ciskając grom taki, wstał zmieszany, chwilę nic nie postanie! Nazywam się wkoło sarnie i stryjem, ale mur chędogi. Sterczały wkoło obracał ostróżne. Gdy w tylu szlachty, w pogody lilia jeziór skroń ucałowawszy, uprzejmie pozdrowił. ",
    buttonText: "O kancelarii",
    url: "/kontakt",
    id: 3,
  },
  {
    title: "Upadłość konsumencka",
    desc: "A zatem. tu świeccy, do rąk muskała włosów pukle i świadki. I zląkł się, jak biały ptak zleciała z potrawą czwarty wszedł do głębi. jeszcze dobrze na waszych polowaniach łowił? Piękna byłaby sława, a pani Telimena mieszkała przed młodzieżą o nich jedna ściana okna bez ogona jest obora. Dozoru tego nigdy sługom należy chartu Sokołowi. Pytano zdania bo tak gadać: Cóż złego, że mi wybaczy, Że ją w środku jej był portret króla Stanisława. Ojcu Podkomorzego zdał się kiedyś demokratą. Bo nie zmruża jako wierzchołki drzewa cały swój rydwan orły.",
    buttonText: "O kancelarii",
    url: "/kontakt",
    id: 4,
  },
]

const ArrowLeft = (props) => {
  return (
    <div
      className={"arrow-services arrow-services--left"}
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
      className={"arrow-services arrow-services--right"}
      onClick={props.onClick}
    >
      <TeamButton
        arrowDirection={"right"}
      />
    </div>
  )
}


const TeamSlider = (  ) => {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  // const [pause, setPause] = React.useState(false)
  // const timer = React.useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1500,
    initial: 0,
    slidesPerView: 1,
    mode: "free-snap",
    centered: false,
    spacing: 200,
    progressTrack: 1,
    // breakpoints: {
    //   '(max-width: 901px)': {
    //     loop: false,
    //     slidesPerView: 1,
    //   },
    // },
    // slideChanged(s) {
    //   setCurrentSlide(s.details().relativeSlide)
    // },
  })

  // React.useEffect(() => {
  //   timer.current = setInterval(() => {
  //     if (!pause && slider) {
  //       slider.next()
  //     }
  //   }, 6000)
  //   return () => {
  //     clearInterval(timer.current)
  //   }
  // }, [pause, slider])


  return (
    <>
      {slider && (
        <div className="arrows-wrapper-services">
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

      {services.map(service => (
        <div key={service.id} className="service-cont keen-slider__slide">
          <h3>{service.title}</h3>
          <br/>
          <p>{service.desc}</p>
          {/*<ButtonRight url="/kontakt" buttonDesc="Umów spotkanie" />*/}
        </div>

      ))}
      </div>

    </>
  )
}

export default  TeamSlider