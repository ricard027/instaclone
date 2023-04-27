import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Colors from '../../themes/colors'
const { primary } = Colors.bg

export const MainAside = styled.aside`
  width: 18%;
  height: 100vh;
  background: ${primary};
  position: fixed;
  left: 0;
  border-right: 1px solid #363636;

  .container-insta-logo {
    margin-top: 1rem;
    width: 100%;
    align-items: center;
    display: flex;
  }

  .insta-logo {
    display: none;
  }

  @media screen and (max-width: 1264px) {
    width: 8%;

    h1 {
      display: none;
    }
    .container-insta-logo {
      justify-content: center;
      .insta-logo {
        display: block;
      }
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }

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
  position: relative;

  #containermoreInfo {
    height: 30vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    #moreInfo {
      position: absolute;
      bottom: 0;
    }
  }

  @media screen and (max-width: 1264px) {
    gap: 0.2rem;
  }
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

  span {
    background: #eee;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  @media screen and (max-width: 1264px) {
    font-size: 0px;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
  }
`
