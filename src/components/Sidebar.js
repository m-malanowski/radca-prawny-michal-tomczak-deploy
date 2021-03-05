import React from "react"
import Links from "../constants/links"

const Sidebar = ({toggleSideBar, isOpen}) => {
  return (
    <>
      <div className={`sidebar ${isOpen? "show-sidebar" : ""}`}>
        <div className="side-container"  onClick={toggleSideBar}>
          <Links styleClass="sidebar-links"/>
          <div  className="bottom-sidebar-links">
            <a className="link-hover" href="mailto:info@radcaprawnytomczak.pl">info@radcaprawnytomczak.pl</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar