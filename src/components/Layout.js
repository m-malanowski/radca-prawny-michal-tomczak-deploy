import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { motion, AnimatePresence } from "framer-motion"
import { layoutVariants, transition } from '../components/variants'


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
            variants={layoutVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={transition}
          >
            {/*{console.log(location)}*/}
            {children}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Layout
