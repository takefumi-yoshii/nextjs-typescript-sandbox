import React from "react"
import styled from "styled-components"
import Link from "next/link"
// ______________________________________________________
//
type T = {
  className?: string
}
// ______________________________________________________
//
const Component: React.FC<T> = props => (
  <div className={props.className}>
    <h1>Detail</h1>
    <Link href={"/"}>
      <a>back to top</a>
    </Link>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  padding: 60px;
  > h1 {
    margin-bottom: 20px;
  }
`
// ______________________________________________________
//
export default StyledComponent
