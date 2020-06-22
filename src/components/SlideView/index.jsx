import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Carousel } from "react-bootstrap"

import { Container, Divisoria, SlideStyled } from "./styled"

const SlideView = props => {
  const { planet, gilberto, duda } = useStaticQuery(graphql`
    query {
      planet: file(relativePath: { eq: "planet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      gilberto: file(relativePath: { eq: "gilberto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      duda: file(relativePath: { eq: "duda.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <Container>
        <Divisoria>
          <div className="nome-divisoria">
            <h2>Não Perca!</h2>
          </div>
        </Divisoria>

        <SlideStyled>
          <div className="slide-container">
            <Carousel className="carousel">
              <Carousel.Item>
                <Img fluid={planet.childImageSharp.fluid} alt="planethemp" />
              </Carousel.Item>
              <Carousel.Item>
                <Img
                  fluid={gilberto.childImageSharp.fluid}
                  alt="Gilberto foto"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Img fluid={duda.childImageSharp.fluid} alt="Gás de cozinha" />
              </Carousel.Item>
            </Carousel>
          </div>
        </SlideStyled>
      </Container>
    </>
  )
}

export default SlideView
