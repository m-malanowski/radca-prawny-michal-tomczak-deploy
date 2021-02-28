import React from "react"
import logo from "../assets/imgs/logoNowe.png"
import PageLinks from "../constants/links"
import {  motion } from "framer-motion"
const Navbar = ({toggleSideBar, isOpen}) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <motion.a
            href="/"
            initial={{
              opacity: 0,
              y: '20px'
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{delay: 1.8, duration: 1., ease: [0.6, 0.01, -0.05, 0.9]}}
            >
           <img src={logo} alt="logo" />
          </motion.a>

          <button type="button" className="toggle-btn" onClick={toggleSideBar}>
            <div className={`nav-icon ${isOpen? "transformed" : ""}`}>
              <div/>
            </div>
          </button>
        </div>
      </div>
      <PageLinks styleClass="nav-links"/>
    </nav>
  )
}

export default Navbar
