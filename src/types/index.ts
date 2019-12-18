import "next"
type PageProps = {
  title: string
}
declare module "next" {
  export type PageFC<P = {}, IP = P & PageProps> = NextPage<P, IP>
}
