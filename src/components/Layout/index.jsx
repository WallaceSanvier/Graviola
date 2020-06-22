import React from "react"
import PropTypes from "prop-types"
import NavBar from "../NavBar"
import Footer from "../Footer"
import GlobalStyles from "../../styles/global"
import ZapDown from "../../components/ZapDown"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <main>{children}</main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
