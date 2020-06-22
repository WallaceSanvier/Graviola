import React from "react"

import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

import { Container } from "./styled"

export default function Banner(props) {
  const { banner04 } = useStaticQuery(graphql`
    query {
      banner04: file(relativePath: { eq: "banner04.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <BackgroundImage
          className="masthead"
          fluid={banner04.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
              <h1>Festival Graviola</h1>
              <h2>16.17.18 de Outubro - 2020</h2>
            </div>
          </div>
        </BackgroundImage>
      </Container>
    </>
  )
}
