import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/imgs/tomczakNoweLogo.png"

const duration = 1
const durationExit = .4
const transition = { delay: 1, duration: 1., ease: [0.6, 0.01, -0.05, 0.9] }

const variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: .1,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    transition: { delay: 1, duration: .5 }
  }
}

const Layout = ({ children, location, props }) => {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <motion.div>
        <Navbar isOpen={isOpen}  toggleSideBar={toggleSideBar}/>
        <Sidebar isOpen={isOpen}  toggleSideBar={toggleSideBar}/>
        <AnimatePresence initial={true} exitBeforeEnter>
          {/*<motion.div*/}
          {/*  className="fake-loader-wrapper"*/}
          {/*  initial={{opacity: 1}}*/}
          {/*  animate={{*/}
          {/*    // display: 'none',*/}
          {/*    // opacity: 0,*/}
          {/*    y: "-100%",*/}
          {/*    transition: {delay: 2, when: "beforeChildren", duration: .5},*/}
          {/*    transitionEnd: {*/}
          {/*      display: "none",*/}
          {/*    },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <motion.p*/}
          {/*    animate={{*/}
          {/*      opacity: 0,*/}
          {/*      y: -20,*/}
          {/*      transition: {delay: 2, duration: 1.5},*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <img src={logo} alt="Radca Prawny Michał Tomczak" />*/}
          {/*  </motion.p>*/}
          {/*</motion.div>*/}
          <motion.div
            location={location}
            key={location.key}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={transition}
          >
            {console.log(location)}
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Layout
