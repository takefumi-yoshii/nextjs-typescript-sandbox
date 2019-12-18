import React from "react"
import Document, { DocumentInitialProps } from "next/document"
import { ServerStyleSheet } from "styled-components"
// ______________________________________________________
//
class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      })
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    }
  }
}
// ______________________________________________________
//
export default MyDocument
