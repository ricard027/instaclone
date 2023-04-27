import { AiFillHome } from 'react-icons/ai'
import { ImCompass2 } from 'react-icons/im'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine, RiAddBoxLine } from 'react-icons/ri'

import { BottomHeaderMobile } from './header.style'

const HeaderBottomMobile = () => {
  return (
    <BottomHeaderMobile>
      <AiFillHome color="#fff" size={26} />
      <ImCompass2 color="#fff" size={26} />
      <BiMoviePlay color="#fff" size={26} />
      <RiAddBoxLine color="#fff" size={26} />
      <RiMessengerLine color="#fff" size={26} />
      <div>{/* Foto de perfil */}</div>

      <div></div>
    </BottomHeaderMobile>
  )
}

export default HeaderBottomMobile
