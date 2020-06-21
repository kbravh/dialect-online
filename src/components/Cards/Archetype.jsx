import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Archetype = ({ card }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ArchetypeCard.png" }) {
        childImageSharp {
          fixed(width: 250, height: 350) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="front">
        <div>{card.title}</div>
        {card.description.split('<>').map(line => (
          <div>{line}</div>
        ))}
        {card.extra.split('<>').map(line => (
          <div>{line}</div>
        ))}
      </div>
      <div className="back">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </div>
    </>
  )
}

export default Archetype
