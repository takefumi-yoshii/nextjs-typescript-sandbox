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
    <Link href={"/"}>
      <a>back to top</a>
    </Link>
  </div>
)
// ______________________________________________________
//
const StyledComponent = styled(Component)`
  background-color: #cff;
`
// ______________________________________________________
//
export default StyledComponent
