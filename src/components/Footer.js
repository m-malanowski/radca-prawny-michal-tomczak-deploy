import React from "react"
import logo from "../assets/imgs/logo4.png"
import PageLinks from "../constants/links"
import overlay from "../assets/imgs/logoNoweFlame.png";
import { Link } from "gatsby"

const Footer = () => {
  return <footer>
    <div className="container-fluid">
      {/*<img src={overlay} alt="" className="footer-img" />*/}
      <div className="upper-nav">
        <div className="footer-nav">
          <img src={logo} alt="" />
          <PageLinks styleClass="nav-links"/>
        </div>
      </div>

      <div className="lower-nav">
        <ul>
          <li><a className="link-hover" href="#">Facebook</a></li>
          <li><a className="link-hover" href="https://g.page/radca-prawny-tomczak?we">Google</a></li>
          <li><a className="link-hover" href="#">Twitter</a></li>
        </ul>
        <ul>
          {/*<li> &copy; Wszelkie prawa zastrzeżone</li>*/}
          <li><Link className="link-hover" to={"/polityka-prywatnosci"}>Polityka prywatności</Link></li>
          {/*<li><a className="link-hover" href="/polityka-prywatnosci">Polityka prywatności</a></li>*/}
          <li><a className="link-hover" rel="noreferrer noopener" href="https://lumina.studio">By: lumina.studio</a></li>
        </ul>
      </div>

    </div>
  </footer>
}

export default Footer
