import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Banner from "../components/Banner"
import LineUp from "../components/LineUp"
import SlideView from "../components/SlideView"
import Address from "../components/Address"

const lineup = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Line UP-Graviola"
          lang="en"
          description="Festival de Musica Graviola"
        />
        <Banner />
        <LineUp />
        <SlideView />
        <Address />
      </Layout>
    </>
  )
}

export default lineup
