import React, { FunctionComponent } from 'react'
import { HeaderContainerMobile } from './header.style'

interface IheaderMobileProps {
  children: React.ReactNode
}
const HeaderMobile: FunctionComponent<IheaderMobileProps> = ({ children }) => {
  return <HeaderContainerMobile>{children}</HeaderContainerMobile>
}
export default HeaderMobile
