import { FunctionComponent } from 'react'
// Style
import {
  ComentsArea,
  IconsArea,
  LikePuclicationQtd,
  Publication,
  PublicationContainer,
  UsercontainerPublication
} from './publication.style'

// Icons
import { AiOutlineHeart } from 'react-icons/ai'
import { TbMessageCircle2, TbSend } from 'react-icons/tb'
import { FaRegBookmark } from 'react-icons/fa'

interface IpublicationProps {
  images: string[]
}
const PublicationComponent: FunctionComponent<IpublicationProps> = ({
  images
}) => {
  return (
    <PublicationContainer>
      <UsercontainerPublication>
        <div className="user-content">
          <div className="image-container"></div>
          <strong>Name user</strong>
          <span>2h</span>
        </div>
        <div className="dots">...</div>
      </UsercontainerPublication>
      <Publication>
        <div>{/* img */}</div>
      </Publication>
      <IconsArea>
        <div>
          <AiOutlineHeart size={26} />
          <TbMessageCircle2 size={26} />
          <TbSend size={26} />
        </div>
        <div>
          <FaRegBookmark size={26} />
        </div>
      </IconsArea>
      <LikePuclicationQtd>1.456 curtidas</LikePuclicationQtd>
      <ComentsArea>
        <div className="description-publication">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          vitae, quidem autem molestiae repudiandae vero nostrum ex, laborum ea
          sequi fuga suscipit cumque... <span className="view-more">mais</span>
        </div>
        <span className="traduction">Ver tradução</span>
        <span className="view-all-coments">Ver todos os 24 comentários</span>
        <div>
          <strong>User exemple </strong>
          <span>comentário do user</span>
        </div>
        <div className="add-coments">Adicione um comentário </div>
      </ComentsArea>
    </PublicationContainer>
  )
}
export default PublicationComponent
