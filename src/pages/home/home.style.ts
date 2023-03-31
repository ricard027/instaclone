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
  overflow-x: scroll;
`

export const ContainerStories = styled.div`
  height: 117px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Stories = styled.div`
  background: #fff;
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  div {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  p {
    color: #333;
    font-size: 0.8rem;
    width: 3.5rem;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
`
export const Rigthcontent = styled.div`
  background: yellow;
  height: 20%;
  width: 30%;
  opacity: 10%;
`
