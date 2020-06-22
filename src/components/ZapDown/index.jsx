import React, { Component } from "react"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"
import { Container, ZapInferior } from "./styled"

import Zap from "../../images/zap.png"

class ZapButton extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="zap-container">
            <ZapInferior>
              <OutboundLink
                onClick={e => {
                  trackCustomEvent({
                    category: "Custom Button",
                    action: "Click",
                    label: "Botao do Whatsapp",
                  })
                }}
                href="https://wa.me/5562985087244?text=Saudações!%20Solicito%20o%20seu%20atendimento."
                className="botao-zap-inferior"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Zap} alt="zap"></img>
              </OutboundLink>
            </ZapInferior>
          </div>
        </Container>
      </>
    )
  }
}

export default ZapButton
