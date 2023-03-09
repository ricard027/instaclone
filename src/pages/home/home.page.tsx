import React from 'react'
import {
  ContainerStories,
  Homecontainer,
  MainAside,
  MainContent,
  NavigateAside,
  NavigateItem,
  NavigationStories,
  Rigthcontent,
  Stories
} from './home.style'
import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { ImCompass2 } from 'react-icons/im'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine, RiAddBoxLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
const HomePage = () => {
  return (
    <Homecontainer>
      <MainAside>
        <h1>Instagram</h1>{' '}
        <NavigateAside>
          <NavigateItem to="/" className="icon">
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
            <span></span>perfil
          </NavigateItem>
          <NavigateItem to="/" id="moreInfo">
            <HiOutlineMenu color="#fff" size={26} />
            mais
          </NavigateItem>
        </NavigateAside>
      </MainAside>

      <MainContent>
        <ContainerStories>
          <NavigationStories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
            <Stories>
              <div></div>
              <p>fulano</p>
            </Stories>
          </NavigationStories>
        </ContainerStories>
      </MainContent>
      <Rigthcontent>
        <div>
          Ricardo machado <button>mudar</button>
        </div>
        <div>
          Sugestões para você <a>ver tudo</a>
        </div>
        <ul>
          <li>
            usuario x <button>seguir</button>
          </li>
          <li>
            usuario x <button>seguir</button>
          </li>{' '}
          <li>
            usuario x <button>seguir</button>
          </li>{' '}
          <li>
            usuario x <button>seguir</button>
          </li>{' '}
          <li>
            usuario x <button>seguir</button>
          </li>
        </ul>
      </Rigthcontent>
    </Homecontainer>
  )
}

export default HomePage
