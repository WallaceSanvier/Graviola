import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"
import Img from "gatsby-image"

import { Container } from "./styled"

function ServiceGrid() {
  const { carrinho, zap2, qrcode } = useStaticQuery(graphql`
    query {
      carrinho: file(relativePath: { eq: "carrinho.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, maxHeight: 2000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      zap2: file(relativePath: { eq: "zap2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 1450) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      qrcode: file(relativePath: { eq: "qrcode.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div className="container">
        <div className="grid-container">
          <div className="card">
            <OutboundLink
              onClick={e => {
                trackCustomEvent({
                  category: "Custom Button",
                  action: "Click",
                  label: "Botao do Locar Produto",
                })
              }}
              href="https://wa.me/5562985087244?text=Saudações!%20Solicito%20o%20seu%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className="img"
                fluid={carrinho.childImageSharp.fluid}
                alt="Locaçao"
              />
              <h4>Line Up</h4>
            </OutboundLink>
          </div>

          <div className="card">
            <OutboundLink
              onClick={e => {
                trackCustomEvent({
                  category: "Custom Button",
                  action: "Click",
                  label: "Botao de Fale Conosco",
                })
              }}
              href="https://wa.me/5562985087244?text=Saudações!%20Solicito%20o%20seu%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className="img"
                fluid={zap2.childImageSharp.fluid}
                alt="Whatsapp"
              />
              <h4>Atividades</h4>
            </OutboundLink>
          </div>

          <div className="card">
            <Img
              className="img"
              fluid={qrcode.childImageSharp.fluid}
              alt="Qr code"
            />
            <h4>Entrar no App</h4>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ServiceGrid
