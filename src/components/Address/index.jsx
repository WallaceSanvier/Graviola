import React, { Component } from "react"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"

import { Container, Place } from "./styled"

import * as Styled from "../Icons/styled"

class Address extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="grid-container">
            <div>
              <h3>Segunda a Sábado das 8:00 as 20:00hrs.</h3>
              <h3>Domingos e Feriados das 8:00 as 13:00hrs.</h3>

              <div>
                <h4>
                  <Styled.LocationOnWrapper />
                  5ª Avenida, número 406 - Leste Vila Nova
                </h4>
              </div>

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
                >
                  <h4>
                    <Styled.WhatsappWrapper />
                    Cel: (62) 98508-7244
                  </h4>
                </OutboundLink>
              </div>
              <div>
                <h3>
                  <Styled.OldPhoneWrapper />
                  Fone: (62) 3261-4000
                </h3>
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
            <iframe
              className="iframe2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d955.5475748921962!2d-49.246325!3d-16.667358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3d4a3c793d3%3A0x4fced570a0942d07!2s5%C2%AA%20Avenida%2C%20406%20-%20Leste%20Vila%20Nova%2C%20Goi%C3%A2nia%20-%20GO%2C%2074643-030!5e0!3m2!1spt-BR!2sbr!4v1585335207480!5m2!1spt-BR!2sbr"
              title="googlemaps"
            ></iframe>
          </div>
        </Place>
      </>
    )
  }
}

export default Address
