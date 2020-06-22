import React, { Component } from "react"
import { Link } from "gatsby"

import * as Styled from "../Icons/styled"
import { Container, Navigation } from "../NavBar/styled"

import lidergas from "../../images/logo.png"

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  handleClick = () => {
    document.querySelector(".navbar-container").scrollIntoView({
      behavior: "smooth",
    })

    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <>
        <Container>
          <div className="navbar-container" onClick={this.handleClick}>
            <Navigation>
              <nav>
                <div className="logo-btn">
                  <div className="logo">
                    <Link to="/">
                      <img className="image-logo" src={lidergas} alt="logo" />
                      <h1>Graviola</h1>
                    </Link>
                  </div>

                  <div className="btn" onClick={this.handleClick}>
                    <Styled.HomeWrapper />
                  </div>
                </div>

                <ul className={this.state.isOpen ? "showNav" : "undefined"}>
                  <li>
                    <Link to="/">Início</Link>
                  </li>

                  <li>
                    <Link to="/lineup">Line Up</Link>
                  </li>
                  <li>
                    <Link to="/activities">Atividades</Link>
                  </li>
                </ul>
              </nav>
            </Navigation>
          </div>
        </Container>
      </>
    )
  }
}

export default Navbar
