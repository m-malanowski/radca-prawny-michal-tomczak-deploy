import React from "react"
const TeamButtonOld = ({ arrowDirection }) => {
  return(
    <div className="team-button">
      <a className={arrowDirection}>
        <svg className="circle" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse className="background" ry="25" rx="25" cy="40" cx="40" strokeWidth="1" />
            <ellipse className="foreground" ry="25" rx="25" cy="40" cx="40" strokeWidth="2" />
          </g>
        </svg>
      </a>
    </div>
  )
}
export default TeamButtonOld