import styled from 'styled-components'
import Colors from '../../themes/colors'

const { primary } = Colors.bg

export const PublicationContainer = styled.div`
  width: 70%;
  background: ${primary};
  border-bottom: solid 1px #363636;
  margin: 2rem auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Publication = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 90%;
  background: #363636;
  border-radius: 0.3rem;
  @media screen and (max-width: 767px) {
    height: 50vh;
    margin-bottom: 0.6rem;
  }
`
export const UsercontainerPublication = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 90%;
  color: #f4f4f4;

  .user-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .image-container {
    border-radius: 50%;
    height: 2.2rem;
    width: 2.2rem;
    background: #363636;
  }
  .dots {
    font-size: 1.5rem;
    cursor: pointer;
  }
`
export const IconsArea = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
  width: 90%;
  svg {
    cursor: pointer;
    color: #fff;
  }
  div {
    &:first-child {
      svg {
        margin-right: 1rem;
      }
    }
  }
`
export const LikePuclicationQtd = styled.div`
  width: 90%;
  height: 1.5rem;
  margin: 0 auto;
  color: #fff;
`
export const ComentsArea = styled.div`
  margin: 0 auto;
  color: #fff;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 0.5rem;

  .add-coments,
  .view-all-coments,
  .view-more {
    color: #8e8e8e;
    cursor: pointer;
  }

  .traduction {
    font-size: 0.8rem;
  }
`
