import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../themes/colors'
const { primary } = Colors.bg
export const Homecontainer = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`
export const MainAside = styled.aside`
  width: 18%;
  height: 100vh;
  background: ${primary};
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #363636;
  h1 {
    color: #fff;
    cursor: pointer;
    margin: 2rem 0 0 1.8rem;
    font-family: 'Lobster Two', cursive;
  }
`
export const NavigateAside = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 3rem;
  height: 100vh;
  position: relative;
`
export const NavigateItem = styled(NavLink)`
  color: #ffff;
  padding: 0.7rem;
  border-radius: 2rem;
  width: 90%;
  align-items: center;
  gap: 1rem;
  display: flex;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: #262626;
  }
  &:hover > svg {
    transform: scale(1.1);
  }

  &#moreInfo {
    margin-top: 20rem;
  }

  span {
    background: #eee;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`

export const ContainerMore = styled.div`
  display: flex;
`
export const MainContent = styled.section`
  width: 50%;

  background: ${primary};
  margin-left: 18%;
`
export const NavigationStories = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`

export const ContainerStories = styled.div`
  margin-top: 2rem;

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
`
export const Rigthcontent = styled.div`
  margin-top: 2.5rem;
  height: 50vh;
  width: 20%;
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
