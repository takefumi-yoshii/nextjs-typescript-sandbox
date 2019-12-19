import React from "react"
import { PageFC } from "next"
import Component from "../../components/detail"
// ______________________________________________________
//
const PageComponent: PageFC = () => <Component />
// ______________________________________________________
//
PageComponent.getInitialProps = async () => {
  return { title: "Detail", logData: { screenName: "Detail" } }
}
// ______________________________________________________
//
export default PageComponent
