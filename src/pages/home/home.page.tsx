// styles
import {
  ContainerStories,
  Homecontainer,
  ImageContainer,
  MainContent,
  NavigationStories,
  Rigthcontent,
  Stories,
  SuggestionsContainer,
  UserrightContainer
} from './home.style'
import { HeaderContainerMobile } from '../../components/header/header.style'
// Icons

import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'

// Components
import CarouselComponent from '../../components/carrousel/carousel-component'
import PublicationComponent from '../../components/publication/publication.component'
import HeaderBottomMobile from '../../components/header/header-bottom-mobile.component'
import MainAsideComponent from '../../components/aside/main-aside.component'
// Utilities
import { useSlidesPreview } from './calcSlidesQtd'
import { getImagesFromUnsplash } from '../../hooks/getImagesHook'
import { SwiperSlide } from 'swiper/react'

const HomePage = () => {
  const { qtdSlidePreview } = useSlidesPreview()
  const { images } = getImagesFromUnsplash()

  const configs = {
    slidesPerView: qtdSlidePreview,
    slidesPerGroup: 4,
    navigation: true,
    pagination: {
      clickable: true
    }
  }

  return (
    <Homecontainer>
      <HeaderContainerMobile>
        <h1>Instagram</h1>
        <div>
          <AiOutlineSearch color="#fff" size={18} />
          <input type="text" placeholder="Pesquisar" />
          <AiOutlineHeart color="#fff" size={26} />
        </div>
      </HeaderContainerMobile>
      <HeaderBottomMobile />
      <MainAsideComponent />
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
