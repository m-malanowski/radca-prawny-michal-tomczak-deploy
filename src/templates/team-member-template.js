import React from "react"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import CtaButton from "../components/CtaButton"
import SEO from "../components/SEO"

const TeamMember = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <Helmet   bodyAttributes={{
      id: 'team-member-page'
    }}   />
    <div className="team-member-page">

      <div className="page-content container-fluid">
        <div className="team-member-image img-wrapper">
           <Image className="img" fluid={data.team.image.childImageSharp.fluid}/>
        </div>

        <div className="team-member-description">
          <div className="bio-header">
            <div>
              <h1>{ data.team.name }</h1>
              <em>{ data.team.position }</em>
            </div>
          </div>
          <br/>

          <ReactMarkdown className="mt-5" source={ data.team.bio }/>

          <div className="team-member-details">
            <p>telefon: { data.team.phone } </p>
            <p>email: <a className="link-hover-dark" href={"mailto:" + data.team.email }>{ data.team.email }</a></p>
          </div>

          <CtaButton arrowDirection="left" buttonDesc="powrót" url="/zespol"/>

        </div>
      </div>
    </div>
  </>
)

export const query = graphql`
    query GetSingleTeam($slug: String) {
        team: strapiTeams(slug: { eq: $slug }) {
            name
            bio
            phone
            email
            position
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

export default TeamMember
