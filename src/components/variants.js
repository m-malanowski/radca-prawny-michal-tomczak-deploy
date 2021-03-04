import { motion } from "framer-motion"
import React from "react"

const splitTextVariants = {
  visible: i => ({
    y: 0,
    transition: {
      delay: i * 0.01,
      duration: 1.2,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }),
  hidden: i => ({
    y: 80,
    transition: {
      delay: i * 0.005,
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  })
}
const transition = { duration: 1., ease: [0.6, 0.01, -0.05, 0.9] }

const commonVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5,
      delay: .5,
      when: "afterChildren"
    }
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { delay: .2, duration: .5 }
  }
}

const layoutVariants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      duration: .4,
      delay: .1,
      // when: "beforeChildren",
      ease: [.24, .83, .66, .32]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: .4,
      ease: [.24, .83, .66, .32]
    }
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 1)",
    transition: {
      default: { duration: 2.6, ease: "easeInOut" }
    }
  }
}

const pathVariantsOuter = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 1)",
    transition: {
      default: { delay: 2.6, duration: .4, ease: "easeInOut" }
    }
  }
}

export { splitTextVariants }
export { transition }
export { commonVariants }
export { layoutVariants }
export { pathVariants }
export { pathVariantsOuter }
