import React from "react"
import { PageFC } from "next"
import Component from "../../components/detail"
// ______________________________________________________
//
const PageComponent: PageFC = () => <Component />
// ______________________________________________________
//
PageComponent.getInitialProps = async ({ req }) => {
  return { title: "Detail" }
}
// ______________________________________________________
//
export default PageComponent
