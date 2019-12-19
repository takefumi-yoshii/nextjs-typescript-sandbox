import "next"
import { AppProps } from "next/app"
declare module "next" {
  // 全ページに要求するメタデータの型
  export type PageProps = {
    title: string
    logData: {
      screenName: string
    }
  }
  // PageComponent に適用する型
  export type PageFC<P = {}, IP = P & PageProps> = NextPage<P, IP>
  // デフォルトでは any 当たっているため Omit で削る。要求する PageProps 型を当てる。
  // export type AppPageProps = Omit<AppProps<PageProps>, "pageProps"> & {
  //   pageProps: PageProps
  // }
  type Override<T extends U, U> = Omit<T, keyof U> & U
  export type AppPageProps = Override<
    AppProps<PageProps>,
    {
      pageProps: PageProps
    }
  >
}
