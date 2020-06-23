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
        title="Festival Graviola"
        lang="en"
        description="Festival Cultural Graviola"
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
