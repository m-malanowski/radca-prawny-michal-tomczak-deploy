import React from "react"
import Links from "../constants/links"
import { motion } from "framer-motion"

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar ${isOpen? "show-sidebar" : ""}`}>
        {/*<span className="x" onClick={toggleSideBar} />*/}
        <div className="side-container"  onClick={toggleSideBar}>
          <Links styleClass="sidebar-links"/>
          <div  className="bottom-sidebar-links">
            <a className="link-hover" href="mailto:info@radcaprawnytomczak.pl">info@radcaprawnytomczak.pl</a>
            {/*<ul>*/}
            {/*  <li><a className="link-hover" href="mailto:info@radcaprawnytomczak.pl">info@radcaprawnytomczak.pl</a></li>*/}
            {/*  <li><a className="link-hover" href="https://g.page/radca-prawny-tomczak?we" target="_blank" rel="noopener">Tu nas znajdziesz</a></li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar