import { FunctionComponent, ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Pagination, A11y, Navigation } from 'swiper'

interface IcarouselProps extends SwiperProps {
  children: ReactNode
  configs: any
}
export const CarouselComponent: FunctionComponent<IcarouselProps> = ({
  children,
  configs
}) => {
  return (
    <Swiper modules={[Pagination, A11y, Navigation]} {...configs}>
      {children}
    </Swiper>
  )
}

export default CarouselComponent
