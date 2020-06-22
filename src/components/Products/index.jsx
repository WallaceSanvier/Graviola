import React from "react"
import { Link } from "gatsby"

import lineup from "../../images/lineup.png"
import eventos from "../../images/eventos.png"

import { Container } from "./styled"

export default function Products() {
  return (
    <>
      <Container>
        <div className="grid-container top">
          <Link to="/lineup">
            <div className="card">
              <div class="container">
                <img src={lineup} alt="banner" />
                <h4>Line Up!</h4>
              </div>
            </div>
          </Link>

          <Link to="/activities">
            <div className="card">
              <div class="container">
                <img src={eventos} alt="banner" />
                <h4>Fique por dentro das Atividades!</h4>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </>
  )
}
