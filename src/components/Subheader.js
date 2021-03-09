import React from "react"
import {motion} from "framer-motion";
import {SplitText} from '../components/SplitText'
import { splitTextVariants, transition } from '../components/variants'
import Image from '../components/Image';

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
      className="subheader">
      {/*<img src={subImg} alt="radca prawny Gdańsk - porady prawne" />*/}
      <Image alt="radca prawny Gdańsk - porady prawne" filename={subImg} />

      <div className="page-title container-fluid">
        <div className="col-lg-5 col-md-8">
          {/*<motion.h1*/}
          {/*  className="page-title"*/}
          {/*  initial={{opacity: 0, y: 40}}*/}
          {/*  animate={{*/}
          {/*    opacity: 1,*/}
          {/*    y: 0,*/}
          {/*    transition: {delay: .6, ...transition},*/}
          {/*  }}*/}
          {/*  exit={{*/}
          {/*    y: 40,*/}
          {/*    opacity:0,*/}
          {/*    transition: {  ...transition},*/}
          {/*  }}>*/}
          {/*  {pageTitle}*/}
          {/*</motion.h1>*/}
          <h1>
            <SplitText
              initial={{ y: "100%" }}
              animate="visible"
              exit="hidden"
              variants={splitTextVariants}>
                {pageTitle}
            </SplitText>
          </h1>

        </div>
      </div>
    </motion.header>
  )
}

export default Subheader