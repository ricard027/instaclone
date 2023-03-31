import {
  IconsArea,
  Publication,
  PublicationContainer
} from './publication.style'

import { AiOutlineHeart } from 'react-icons/ai'
import { TbMessageCircle2, TbSend } from 'react-icons/tb'

const PublicationComponent = () => {
  return (
    <PublicationContainer>
      <div>
        <div>
          <img src="" alt="" />
          <p>Name user</p>
          <span>2h</span>
        </div>
        <div>...</div>
      </div>
      <Publication>
        <div>{/* img */}</div>
      </Publication>
      <IconsArea>
        <AiOutlineHeart size={26} />
        <TbMessageCircle2 size={26} />
        <TbSend size={26} />
      </IconsArea>
    </PublicationContainer>
  )
}
export default PublicationComponent
