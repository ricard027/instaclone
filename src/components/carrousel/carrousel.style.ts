import styled from 'styled-components'

export const ContainerCarrousel = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`
