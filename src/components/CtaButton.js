import React from "react"
import { Link } from "gatsby"
const CtaButton = ({url, buttonDesc, arrowDirection, color}) => {
  return(
    <div className="cta2">
      <Link to={url} className={[arrowDirection, color].join(' ')}>
        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse className="background" ry="25" rx="25" cy="40" cx="40" strokeWidth="1" />
            <ellipse className="foreground" ry="25" rx="25" cy="40" cx="40" strokeWidth="2" />
          </g>
        </svg>
        <span className={color}> { buttonDesc } </span>
      </Link>
    </div>
  )
}
export default CtaButton