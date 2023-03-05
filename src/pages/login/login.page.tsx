import {
  AppContainer,
  CreateAcount,
  CustonButton,
  ForgotPassword,
  FormContainer,
  InputContainer,
  LoginContainer,
  LoginFacebook,
  LoginHeadLine,
  ObtainApp,
  Separator
} from './login.styles'

import { AiFillFacebook } from 'react-icons/ai'

const LoginPage = () => (
  <LoginContainer>
    <FormContainer>
      <LoginHeadLine />
      <InputContainer>
        <input type="text" placeholder="Telefone, nome de usuario ou email" />
        <input type="text" placeholder="Senha" />
      </InputContainer>
      <CustonButton>Entrar</CustonButton>
      <Separator>OU</Separator>
      <LoginFacebook>
        <AiFillFacebook size={22} color="#00376b" />
        Entrar com o Facebook
      </LoginFacebook>
      <ForgotPassword>Esqueceu sua senha ?</ForgotPassword>
    </FormContainer>
    <CreateAcount>
      Nao tem conta ?<span> Cadastre-se</span>
    </CreateAcount>
    <ObtainApp>Obtenha o aplicativo.</ObtainApp>
    <AppContainer>
      <div className="googlePlay">
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/y_/r/tUzYKZ-xrQK.png"
          alt=""
        />
      </div>
      <div className="microsoft">
        <img
          src="https://static.cdninstagram.com/rsrc.php/v3/yE/r/QQnPXT5YsC4.png"
          alt=""
        />
      </div>
    </AppContainer>
  </LoginContainer>
)

export default LoginPage
