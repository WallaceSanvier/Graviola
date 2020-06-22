import React from "react"

import { Container } from "./styled"
import * as Styled from "../Icons/styled"

const About = () => {
  return (
    <>
      <Container>
        <div className="flex-container">
          <div className="card">
            <h2>
              <Styled.CreditCardWrapper /> Parcelamos!
            </h2>
            <p style={{ color: "red" }}>
              Neste momento difícil de quarentena estaremos comercializando o
              Gás com parcelamentos em até 3X no cartão. Sem juros!
            </p>
          </div>
          <div className="card">
            <h2>
              <Styled.ShutterSpeedWrapper /> Rapidez
            </h2>
            <p>
              Contamos com a agilidade de uma equipe qualificada para oferecer
              segurança e eficiência para você e toda sua família.
            </p>
          </div>
          <div className="card">
            <h2>
              <Styled.AwardWrapper /> Missão
            </h2>

            <p>
              Trabalhar para entregar produtos de qualidade e com preços
              satisfatórios. No mercado desde 2008 oferecendo um excelente
              atendimento eficiência na entrega e produtos de qualidade.
            </p>
          </div>
          <div className="card">
            <h2>
              <Styled.HeartsWrapper /> Valores
            </h2>

            <p> Respeito com o cliente;</p>

            <p> Transparência;</p>

            <p>Excelência no atendimento.</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
