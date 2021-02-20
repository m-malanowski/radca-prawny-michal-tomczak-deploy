import React from "react"
import { Link } from "gatsby"
const TeamButtonOld = ({url, arrowDirection}) => {
  return(
    <div className="team-button">
      <Link to={url} className={arrowDirection}>
        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse className="foreground" ry="50" rx="50" cy="60" cx="60" stroke-width="2" />
          </g>
        </svg>
      </Link>
    </div>
  )
}
export default TeamButtonOld