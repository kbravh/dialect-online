import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Legacy = ({ card }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "LegacyCard.png" }) {
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
        <div>{card.guidelines.split('<>').map(guideline => (
          <div>{guideline}</div>
        ))}</div>
        {card.prompts.map(prompt => (
          <div>{prompt}</div>
        ))}
      </div>
      <div className="back">
        <Img fixed={data.placeholderImage.childImageSharp.fixed} />
      </div>
    </>
  )
}

export default Legacy
