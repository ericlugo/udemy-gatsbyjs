import React from "react"
import Header from "./Header.js"
import Footer from "./Footer.js"
// import "./layout.css"
// import styles from "../../css/header.module.css"
// import "bootstrap/dist/css/bootstrap.min.css"
// import "../../sass/layout.sass"
// import "../../sass/layout.module.sass"

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}
