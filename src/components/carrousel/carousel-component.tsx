import { FunctionComponent, ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Pagination, A11y, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
interface IcarouselProps extends SwiperProps {
  children: ReactNode
  configs: any
}
export const CarouselComponent: FunctionComponent<IcarouselProps> = ({
  children,
  configs
}) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Navigation]}
      slidesPerGroup={5}
      cssMode={true}
      {...configs}>
      {children}
    </Swiper>
  )
}

export default CarouselComponent
