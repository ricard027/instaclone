import styled from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background: #fafafa;
`
export const FormContainer = styled.div`
  margin-top: 2rem;
  align-items: center;
  border: solid 1px #dbdbdb;

  display: inherit;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  width: 360px;
  height: 65vh;

  .terms {
    text-align: center;
    letter-spacing: normal;
  }

  .terms span {
    color: #00376b;
  }

  button:nth-child(3) {
    height: 2rem;
  }
  button:nth-last-child(1) {
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
    width: 70%;
    color: #8e8e8e;
    letter-spacing: 1px;

    &:nth-child(2) {
      font-weight: bold;
    }
    &:nth-child(6),
    &:nth-child(7) {
      font-size: 0.7rem;
    }
  }
`
