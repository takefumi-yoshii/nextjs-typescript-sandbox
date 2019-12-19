import React from "react"
import { AppPageProps, PageProps } from "next"
import App, { AppContext } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "../styles"
// ______________________________________________________
//
const AppComponent = ({ Component, pageProps }: AppPageProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>{pageProps.title}</title>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
)
// ______________________________________________________
//
AppComponent.getInitialProps = async (appContext: AppContext) => {
  const appProps: { pageProps: PageProps } = await App.getInitialProps(
    appContext
  )
  // 全ページで制約されているため、安全な値として扱える
  // これらのメタデータをもって、ロギングなどの middleware非同期処理を挟める。
  const { screenName } = appProps.pageProps.logData
  // 実際はロギングAPIなどをここで叩く
  console.log(screenName)
  return { ...appProps }
}
// ______________________________________________________
//
export default AppComponent
