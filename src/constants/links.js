import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
// import {motion, AnimatePresence} from "framer-motion";

const data = [
  // {
  //   id: 1,
  //   text: "Strona główna",
  //   url: "/",
  // },
  {
    id: 2,
    text: "O Kancelarii",
    url: "/radca-prawny-gdansk/",
  },
  {
    id: 3,
    text: "Zespół",
    url: "/zespol/",
  },
  {
    id: 4,
    text: "Zakres Usług",
    url: "/zakres-uslug/",
  },
  {
    id: 5,
    text: "Blog prawniczy",
    url: "/blog-prawniczy/",
  },
  {
    id: 6,
    text: "Kontakt",
    url: "/kontakt/",
  },
]

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#ffffff" : "hsla(0,0%,100%, .6)",

          // color: (condition) ? (true block) : ((condition2) ? (true block2) : (else block2)),
          // borderBottom: isCurrent ? "1px solid white" : "none"
        }
      };
    }}
  />
);

const tempLinks = data.map(link => {
  return (
    <motion.li
      key={link.id}
      initial={{
        opacity: 0,
        y: '20px'
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{delay: 1.3, duration: 1., ease: [0.6, 0.01, -0.05, 0.9]}}
    >
      <NavLink aria-current="location" to={link.url}>{link.text}</NavLink>
    </motion.li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
