import React from "react"
import { PageFC } from "next"
import { ErrorProps } from "next/error"
// ______________________________________________________
//
const ErrorComponent: PageFC<ErrorProps> = ({ statusCode }) => (
  <>
    {statusCode
      ? `An error ${statusCode} occurred on server`
      : "An error occurred on client"}
  </>
)
// ______________________________________________________
//
ErrorComponent.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode, title: `Error | ${statusCode}` }
}
// ______________________________________________________
//
export default ErrorComponent
