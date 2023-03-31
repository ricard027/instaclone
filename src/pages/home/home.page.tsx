import React, { useState, useEffect } from 'react'

// styles
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
// icons
import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
import { ImCompass2 } from 'react-icons/im'
import { BiMoviePlay } from 'react-icons/bi'
import { RiMessengerLine, RiAddBoxLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
// Components
import CarouselComponent from '../../components/carrousel/carousel-component'
import PublicationComponent from '../../components/publication/publication.component'
// Utilities
import axios from 'axios'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'

const HomePage = () => {
  const configs = {
    spaceBetween: 20,
    slidesPerView: 10,
    navigation: true,
    pagination: { clickable: true }
  }
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImagesFromUnsplash = async () => {
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'people',
            per_page: 10,
            collections: '938381'
          },
          headers: {
            Authorization: `Client-ID sKl5qQ6pmkWSrLji2FD55GcBGx1Arb2Te-wYMnfZn4g`
          }
        })
        const dataImages = await res.data.results
        setImages(dataImages)
      } catch (error) {
        console.log('error', error)
      }
    }
    void getImagesFromUnsplash()
  }, [])
  console.log(images)
  return (
    <Homecontainer>
      <MainAside>
        <h1>Instagram</h1>{' '}
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
          <NavigateItem to="/" id="moreInfo">
            <HiOutlineMenu color="#fff" size={26} />
            mais
          </NavigateItem>
        </NavigateAside>
      </MainAside>
      <MainContent>
        <ContainerStories>
          <NavigationStories>
            {images.map((imagesdata: any) => (
              <CarouselComponent configs={configs} key={imagesdata.id}>
                <Stories key={imagesdata.id}>
                  <div>
                    <img
                      src={imagesdata.urls.regular}
                      alt={imagesdata.alt_description}
                    />
                  </div>
                  <p>{imagesdata.user.username}</p>
                </Stories>
              </CarouselComponent>
            ))}
          </NavigationStories>
        </ContainerStories>
        <PublicationComponent images={images} />
        <PublicationComponent images={images} />
        <PublicationComponent images={images} />
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
