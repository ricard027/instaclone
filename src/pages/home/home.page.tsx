import React, { useState, useEffect } from 'react'

// styles
import {
  ContainerStories,
  Homecontainer,
  ImageContainer,
  MainAside,
  MainContent,
  NavigateAside,
  NavigateItem,
  NavigationStories,
  Rigthcontent,
  Stories,
  SuggestionsContainer,
  UserrightContainer
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
import { SwiperSlide } from 'swiper/react'

const HomePage = () => {
  const configs = {
    slidesPerView: 10,
    slidesPerGroup: 5,
    navigation: true,
    pagination: {
      clickable: true
    }
  }
  const [images, setImages] = useState([])

  useEffect(() => {
    const getImagesFromUnsplash = async () => {
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'people',
            per_page: 20,
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
            <CarouselComponent configs={configs}>
              {images.map((imagesdata: any) => (
                <SwiperSlide key={imagesdata.id}>
                  <Stories key={imagesdata.id}>
                    <ImageContainer>
                      <img
                        src={imagesdata.urls.regular}
                        alt={imagesdata.alt_description}
                      />
                    </ImageContainer>
                    <p>{imagesdata.user.username}</p>
                  </Stories>
                </SwiperSlide>
              ))}
            </CarouselComponent>
          </NavigationStories>
        </ContainerStories>
        <PublicationComponent images={images} />
        <PublicationComponent images={images} />
        <PublicationComponent images={images} />
      </MainContent>

      <Rigthcontent>
        <UserrightContainer>
          <div className="container-user">
            <div className="image-rigth-content"></div>
            <div className="user-names-right-content">
              <div className="name">User Name</div>
              <p>Profile name</p>
            </div>
          </div>
          <button>mudar</button>
        </UserrightContainer>

        <SuggestionsContainer>
          <div>Sugestões para você </div>
          <p>ver tudo</p>
        </SuggestionsContainer>

        <ul>
          <li>
            <div className="container-profile-sugestion-user">
              <div className="img-sugestion-user"></div>
              <div className="sugestion-name-user">
                <div>user random</div> <p>seguido por ...</p>
              </div>
            </div>
            <button>seguir</button>
          </li>
          <li>
            <div className="container-profile-sugestion-user">
              <div className="img-sugestion-user"></div>
              <div className="sugestion-name-user">
                <div>user random</div> <p>seguido por ...</p>
              </div>
            </div>
            <button>seguir</button>
          </li>
          <li>
            <div className="container-profile-sugestion-user">
              <div className="img-sugestion-user"></div>
              <div className="sugestion-name-user">
                <div>user random</div> <p>seguido por ...</p>
              </div>
            </div>
            <button>seguir</button>
          </li>
          <li>
            <div className="container-profile-sugestion-user">
              <div className="img-sugestion-user"></div>
              <div className="sugestion-name-user">
                <div>user random</div> <p>seguido por ...</p>
              </div>
            </div>
            <button>seguir</button>
          </li>
          <li>
            <div className="container-profile-sugestion-user">
              <div className="img-sugestion-user"></div>
              <div className="sugestion-name-user">
                <div>user random</div> <p>seguido por ...</p>
              </div>
            </div>
            <button>seguir</button>
          </li>
        </ul>
        <footer>
          <ul>
            <li>Sobre</li>
            <li>Ajuda</li>
            <li>Imprensa</li>
            <li>API</li>
            <li>Carreiras</li>
            <li>Privacidade</li>
            <li>Termos</li>
            <li>localizações</li>
            <li>Idioma</li>
            <li>Meta Verified</li>
          </ul>
          <p>&copy; INSTAGRAM CLONE FROM RICARDO</p>
        </footer>
      </Rigthcontent>
    </Homecontainer>
  )
}

export default HomePage
