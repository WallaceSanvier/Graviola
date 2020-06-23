import React, { Component } from "react"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"

import { Container, Place } from "./styled"

class Address extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="grid-container">
            <div>
              <h3>Centro cultural Oscar Niemayer</h3>
              <h3>Aberto ás 16:00</h3>

              <div>
                <h3>Goiânia-Goiás</h3>
              </div>

              <div>
                <OutboundLink
                  onClick={e => {
                    trackCustomEvent({
                      category: "Custom Button",
                      action: "Click",
                      label: "Botao do Whatsapp",
                    })
                  }}
                  href="https://wa.me/5562985087244?text=Saudações!%20Solicito%20o%20seu%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                ></OutboundLink>
              </div>
            </div>
          </div>
        </Container>

        <Place>
          <div className="dados-endereco"></div>

          <div className="endereco-google">
            <h2>Google Maps</h2>
          </div>

          <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244608.12811393512!2d-49.4654050452255!3d-16.676783272017396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef049566fb0d1%3A0x4123957cb2e67491!2sCentro%20Cultural%20Oscar%20Niemeyer!5e0!3m2!1spt-BR!2sbr!4v1592930954049!5m2!1spt-BR!2sbr"></iframe>
          </div>
        </Place>
      </>
    )
  }
}

export default Address
