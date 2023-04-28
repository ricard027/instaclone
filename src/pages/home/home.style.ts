import styled from 'styled-components'
import Colors from '../../themes/colors'
const { primary } = Colors.bg

export const Homecontainer = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`

export const ContainerMore = styled.div`
  display: flex;
`
export const MainContent = styled.section`
  width: 40%;

  background: ${primary};
  margin-left: 18%;

  @media screen and (max-width: 1264px) {
    margin-left: 0;
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    margin-top: 3.5rem;
  }
`
export const ContainerStories = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .swiper-pagination-bullet {
    display: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #fafafa;
    &::after {
      font-size: 0.7rem;
    }
  }
`

export const NavigationStories = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  @media screen and (max-width: 1264px) {
    width: 70vw;
  }
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
`

export const Stories = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  p {
    color: #fafafa;
    font-size: 0.8rem;
    width: 3.5rem;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    p {
      text-align: center;
    }
  }
`
export const ImageContainer = styled.div`
  width: 66px;
  height: 66px;

  img {
    width: 100%;
    height: 100%;
    border: solid 2px ${Colors.Customs.pink};
    border-image-slice: 1;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`
export const Rigthcontent = styled.div`
  margin-top: 2.5rem;
  height: 50vh;
  width: 20%;
  @media screen and (max-width: 1160px) {
    display: none;
  }
  button {
    background: none;
    border: none;
    color: ${Colors.Customs.Blue};
    cursor: pointer;
  }
  li {
    margin-top: 1rem;
    color: #f4f4f4;
    display: flex;
    justify-content: space-between;

    .container-profile-sugestion-user {
      display: flex;
      align-items: center;
      gap: 1rem;

      .img-sugestion-user {
        height: 2.2rem;
        width: 2.2rem;
        border-radius: 50%;
        background: #8e8e8e;
      }
      .sugestion-name-user {
        text-align: justify;
        p {
          color: #8e8e8e;
        }
      }
    }
  }
  footer {
    justify-content: flex-end;
    margin-top: 1rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      line-height: 5px;

      li {
        color: #8e8e8e;
        font-size: 0.8rem;
        cursor: pointer;
      }
    }
    p {
      margin-top: 1rem;
      color: #8e8e8e;
      font-size: 0.8rem;
    }
  }
`
export const UserrightContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .container-user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: -5px;
  }
  .image-rigth-content {
    background: #8e8e8e;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  .user-names-right-content {
    div {
      color: #f4f4f4;
    }
    p {
      color: #8e8e8e;
    }
  }
`
export const SuggestionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  div {
    color: #8e8e8e;
  }
  p {
    color: #f4f4f4;
    cursor: pointer;
  }
`
