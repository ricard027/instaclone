import React, { FunctionComponent } from 'react'
import { ContainerCarrousel } from './carrousel.style'
interface IcarrouselProps {
  children: React.ReactNode
  ref: React.RefObject<HTMLDivElement>
}
const Carrousel: FunctionComponent = React.forwardRef<IcarrouselProps>(
  (props, ref) => {
    return <ContainerCarrousel ref={ref}>{props.children}</ContainerCarrousel>
  }
)
Carrousel.displayName = 'Carrousel'
export default Carrousel
