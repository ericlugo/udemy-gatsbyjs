import React from "react"
import { ThemeProvider } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

// import "./layout.css"
// import styles from "../../css/header.module.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "../../sass/layout.sass"
// import "../../sass/layout.module.sass"

const theme = {
  primaryColor: "#3fd0d4",
  mainWhite: "#ffffff",
  offWhite: "#f7f7f7",
  mainBlack: "#222222",
  mainGrey: "#ececec",
  darkGrey: "#afafaf",

  mainTransition: "all 0.3s linear",
  mainSpacing: "4px",
  lightShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",

  breakpointXS: "576px",
  breakpointSM: "768px",
  breakpointMD: "992px",
  breakpointLG: "1200px",
}

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}
