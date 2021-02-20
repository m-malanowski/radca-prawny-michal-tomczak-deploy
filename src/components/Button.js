import React from "react"
import { Link } from "gatsby"
const Button = ({url, buttonDesc}) => {
  return(
    <>
      <Link to={url} className="cta">
        <span>{buttonDesc}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"/>
          <polyline points="8 1 12 5 8 9"/>
        </svg>
      </Link>
    </>
  )
}
export default Button