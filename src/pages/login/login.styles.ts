import styled from 'styled-components'

export const LoginContainer = styled.main`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`
export const MessageError = styled.div`
  text-align: left;
  margin: 5px 0;
  font-size: 12px;
  color: red;
`

export const LoginHeadLine = styled.i`
  margin-top: 1rem;
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y-/r/yXM3FgMdVNX.png);
  background-position: 0px -52px;
  width: 175px;
  height: 51px;
`

export const FormContainer = styled.div`
  background: #fafafa;
  border: solid 1px #dbdbdb;
  width: 360px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
`
export const LoginFacebook = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #00376b;
  cursor: pointer;
  svg {
    margin-bottom: 1.5px;
  }
`
export const ForgotPassword = styled.div`
  font-size: 12px;
  color: #00376b;
  cursor: pointer;
`

export const CreateAcount = styled.div`
  border: solid 1px #dbdbdb;
  background: #fafafa;
  margin-top: 10px;
  width: 360px;
  height: 63px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  span {
    color: #0095f6;
    font-weight: bold;
    cursor: pointer;
  }
`
export const ObtainApp = styled.span`
  margin: 1rem 0 0.3rem 0;
`

export const AppContainer = styled.div`
  width: 360px;
  display: flex;
  padding: 1rem;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 134px;
    height: 40px;
    border-radius: 0.2rem;
  }
`

export const Separator = styled.div`
  width: 260px;
  text-align: center;
  display: flex;
  gap: 0.7rem;
  justify-content: space-evenly;
  color: #8e8e8e;
  font-weight: bold;
  font-size: 13px;

  &:before,
  &:after {
    content: '';
    display: flex;
    width: 50%;
    border-bottom: 1px solid #dbdbdb;
    background: #fafafa;
    margin-bottom: 0.5rem;
  }
`
