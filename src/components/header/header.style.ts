import styled from 'styled-components'
import Colors from '../../themes/colors'

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
    :last-child {
      bottom: 0;
      background-color: red;
    }
  }
  
  h1 {
    font-family: 'Lobster Two', cursive;
    color: #fff;
    margin-left: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1.5rem;

    input {
      width: 15rem;
      height: 2rem;
      border-radius: 0.4rem;
      border: none;
      font-size: 0.8em;
      padding-left: 1rem;
      position: relative;
      display: flex;
      background-color: #666;

      ::placeholder {
        color: #fff;
        padding-left: 1rem;
      }
    }
    svg {
      cursor: pointer;
      :first-child {
        position: absolute;
        z-index: 1;
        margin-left: 0.5rem;
      }
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
