import React from "react"
import PageLinks from "../constants/links"
import { Link } from "gatsby"
import logo from "../assets/imgs/logo.svg";
// import { staggerItem, staggerContainer } from "./variants"
// import { motion } from "framer-motion";
import TriggerText from "../components/TriggerText"


const Footer = () => {
  return <footer>
    <div className="container-fluid">
      <TriggerText delay=".4">
        <div className="upper-nav">
          <div className="footer-nav">
            <img src={logo} alt="Radca prawny Gdańsk" />
            <PageLinks styleClass="nav-links"/>
          </div>
        </div>
      </TriggerText>

      <TriggerText delay=".5">
        <div className="lower-nav">
          <ul>
            <li><a className="link-hover" href="https://www.facebook.com/Radca-Prawny-Gda%C5%84sk-Micha%C5%82-Tomczak-110583451087567">Facebook</a></li>
            <li><a className="link-hover" href="https://g.page/radca-prawny-tomczak?we">Google</a></li>
            <li><a className="link-hover" href="https://twitter.com/MichaRadca">Twitter</a></li>
          </ul>
          <ul>
            <li><Link className="link-hover" to={"/polityka-prywatnosci"}>Polityka prywatności</Link></li>
            <li><a className="link-hover" rel="nofollow noopener" href="https://lumina.studio">By: lumina.studio</a></li>
          </ul>
        </div>
      </TriggerText>

    </div>
  </footer>
}

export default Footer
