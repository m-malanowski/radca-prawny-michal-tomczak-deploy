import React from "react"
import { Helmet } from "react-helmet"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import CtaButton from "../components/CtaButton"
import SEO from "../components/SEO"
import TriggerText from "../components/TriggerText"

const TeamMember = ({ data }) => (
  <>
    <SEO title="⚖️ &nbsp; O Kancelarii | Kancelaria Adwokacka Szymon Mikulak. Porady Prawne Gdynia. Adwokat Gdynia" description="Zadzwoń ☎ 606 502 202. Adwokat Gdynia - Sprawy Cywilne, Sprawy Karne, Porady Prawne Gdynia"/>

    <Helmet   bodyAttributes={{
      id: 'team-member-page'
    }}   />
    <div className="team-member-page">

      <div className="page-content container-fluid">
        <div className="team-member-image img-wrapper">
          <TriggerText delay=".1" threshold="0.4">
           <Image className="img" fluid={data.team.image.childImageSharp.fluid}/>
          </TriggerText>
        </div>

        <div className="team-member-description">
          <div className="bio-header">
            <div>
              <TriggerText threshold=".5">
                <h1>{ data.team.name }</h1>
              </TriggerText>
              <TriggerText threshold="1" delay=".2">
                <em>{ data.team.position }</em>
              </TriggerText>
            </div>
          </div>
          <br/>

          <TriggerText threshold="1" delay=".4">
            <ReactMarkdown className="mt-5" source={ data.team.bio }/>
          </TriggerText>

          <TriggerText threshold=".5" delay=".6">
            <div className="team-member-details">
              <p>telefon: { data.team.phone } </p>
              <p>email: <a className="link-hover-dark" href={"mailto:" + data.team.email }>{ data.team.email }</a></p>
            </div>
          </TriggerText>

          <TriggerText threshold=".5" delay=".8">
            <CtaButton arrowDirection="left" buttonDesc="powrót" url="/zespol"/>
          </TriggerText>

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
