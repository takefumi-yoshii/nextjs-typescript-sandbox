import React from "react"
import Head from "next/head"
import App, { AppContext, AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"
// ______________________________________________________
//
const AppComponent = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>{pageProps.title && <title>{pageProps.title}</title>}</Head>
    <Component {...pageProps} />
  </ThemeProvider>
)
// ______________________________________________________
//
AppComponent.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
// ______________________________________________________
//
export default AppComponent
