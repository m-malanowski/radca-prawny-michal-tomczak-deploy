import React from "react"
import {motion} from "framer-motion";
const transition = {duration: 1., ease: [0.6, 0.01, -0.05, 0.9]};

const Subheader = ({pageTitle, subImg}) => {
  return (
    <motion.header
      animate={{
        height: "46vh",
        transition: {delay: 2.0, ...transition},
      }}
      exit={{
        height: "100vh",
        transition: {delay: .2, ...transition},
      }}
      // initial={{opacity: 0, y: 40}}
      // animate={{
      //   opacity: 1,
      //   y: 0,
      //   transition: {delay: .2, ...transition},
      // }}

      className="subheader">
      <img src={subImg} alt="radca prawny" />
      <div className="page-title container-fluid">
        <div className="col-lg-5 col-md-8">
          <motion.h1
            className="page-title"
            initial={{opacity: 0, y: 40}}
            animate={{
              opacity: 1,
              y: 0,
              transition: {delay: .6, ...transition},
            }}
            exit={{
              y: 40,
              opacity:0,
              transition: {  ...transition},
            }}>
            {pageTitle}
          </motion.h1>

        </div>
      </div>
    </motion.header>
  )
}

export default Subheader