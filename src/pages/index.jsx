import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import Products from "../components/Products"
import activities from "../images/banner01.png"
import SlideView from "../components/SlideView"
import Address from "../components/Address"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Comprar Gás de Cozinha e Agua Mineral"
        lang="en"
        description="Para comprar gás de cozinha e água mineral de qualidade entre no site e peça pelo Whatsapp!(62) 98508-7244.Onde comprar Gas de cozinha.Deposito de Gas de cozinha próximo."
      />

      <Banner />
      <img src={activities} alt="Banner de atividades" />
      <Products />
      <SlideView />
      <Address />
    </Layout>
  )
}

export default IndexPage
