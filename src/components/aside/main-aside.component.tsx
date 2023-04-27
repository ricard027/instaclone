// icons
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineInstagram
} from 'react-icons/ai'
import { ImCompass2 } from 'react-icons/im'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine, RiAddBoxLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
// Styles

import { MainAside, NavigateAside, NavigateItem } from './main-aside.style'
// Utilities

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import { FunctionComponent } from 'react'

const MainAsideComponent: FunctionComponent = () => {
  return (
    <MainAside>
      <div className="container-insta-logo">
        <AiOutlineInstagram color="#fff" size={26} className="insta-logo" />
        <h1>Instagram</h1>
      </div>
      <NavigateAside>
        <NavigateItem to="/" className="icon" onClick={() => signOut(auth)}>
          <AiFillHome color="#fff" size={26} />
          Página inicial
        </NavigateItem>
        <NavigateItem to="/">
          <AiOutlineSearch color="#fff" size={26} />
          Pesquisa
        </NavigateItem>
        <NavigateItem to="/">
          <ImCompass2 color="#fff" size={26} />
          Explorar
        </NavigateItem>
        <NavigateItem to="/">
          <BiMoviePlay color="#fff" size={26} />
          Reels
        </NavigateItem>
        <NavigateItem to="/">
          <RiMessengerLine color="#fff" size={26} /> Mensagens
        </NavigateItem>
        <NavigateItem to="/">
          <AiOutlineHeart color="#fff" size={26} />
          Notificações
        </NavigateItem>
        <NavigateItem to="/">
          <RiAddBoxLine color="#fff" size={26} />
          Criar
        </NavigateItem>
        <NavigateItem to="/">
          <span>{/* image profile */}</span>perfil
        </NavigateItem>

        <div id="containermoreInfo">
          <NavigateItem to="/" id="moreInfo">
            <HiOutlineMenu color="#fff" size={26} />
            mais
          </NavigateItem>
        </div>
      </NavigateAside>
    </MainAside>
  )
}

export default MainAsideComponent
