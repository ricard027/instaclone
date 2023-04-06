import styled from 'styled-components'
import Colors from '../../themes/colors'

export const HeaderContainerMobile = styled.nav`
  position: fixed;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid #e8e8e8;
  background-color: ${Colors.bg.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  @media screen and (min-width: 768px) {
    display: none;
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
    }
    svg {
      cursor: pointer;
    }
  }
`
