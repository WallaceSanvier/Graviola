import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import Activities from "../components/Activities"
import SlideView from "../components/SlideView"
import Address from "../components/Address"

const activities = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Atividades -Graviola"
          lang="en"
          description="Festival de Musica Graviola"
        />
        <Banner />
        <Activities />
        <SlideView />
        <Address />
      </Layout>
    </>
  )
}

export default activities
