import React from "react"
import { PageFC } from "next"
import Component from "../components/index"
// ______________________________________________________
//
const PageComponent: PageFC = () => <Component />
// ______________________________________________________
//
PageComponent.getInitialProps = async () => {
  return {
    title: "TOP",
    logData: { screenName: "TOP" }
  }
}
// ______________________________________________________
//
export default PageComponent
