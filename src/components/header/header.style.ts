import styled from 'styled-components'
import Colors from '../../themes/colors'
import { AiOutlineSearch } from 'react-icons/ai'

export const SearchIcon = styled(AiOutlineSearch)`
  color: #fff;
  position: absolute;
  transition: opacity 0.2s;
  z-index: 1;
  transform: translatex(20%);
  &.hide {
    opacity: 0;
  }
`
export const HeaderContainerMobile = styled.nav`
  position: fixed;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #666;
  background-color: ${Colors.bg.primary};
  display: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  h1 {
    font-family: 'Lobster Two', cursive;
    color: #fff;
    margin-left: 5%;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5%;
    margin-right: 1.5rem;

    input {
      width: 50vw;
      height: 2rem;
      border-radius: 0.4rem;
      border: none;
      font-size: 1em;
      padding-left: 1rem;
      display: flex;
      background-color: #666;
      color: #fff;

      &:focus ~ #searchIcon {
        display: none;
      }

      ::placeholder {
        color: #fff;
        padding-left: 1rem;
      }
    }
    .heartIcon {
      cursor: pointer;
    }
  }
`
export const BottomHeaderMobile = styled.nav`
  position: fixed;
  width: 100%;
  height: 4rem;
  background-color: ${Colors.bg.primary};
  align-items: center;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid #666;

  div {
    border-radius: 50%;
    background-color: #666;
    height: 50%;
    width: 2rem;
    transition: all 0.3s;
  }
  & > * {
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`
