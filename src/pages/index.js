import React from "react"
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"


const IndexPage = () => (
  <>
    <Header />
    <Banner />
    <AboutBlurb/>
  </>

)

export default IndexPage
