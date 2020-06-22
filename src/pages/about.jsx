import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/About"
import SlideView from "../components/SlideView"
import Address from "../components/Address"

export default function about() {
  return (
    <Layout>
      <SEO
        title="Sobre nós"
        lang="en"
        description="Para comprar gás de cozinha e água mineral de qualidade entre no site e peça pelo Whatsapp!(62) 98508-7244.Onde comprar Gas de cozinha com preço acessível.Gas de cozinha próximo."
      />
      <Banner />
      <About />
      <SlideView />
      <Address />
    </Layout>
  )
}
