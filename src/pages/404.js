import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <SEO title="404: Not found" />
        <h1>Página não encontrada!</h1>
        <Link to="/">
          <p>Click Aqui para Voltar ao Menu</p>
        </Link>
      </Layout>
    </>
  )
}

export default NotFoundPage
