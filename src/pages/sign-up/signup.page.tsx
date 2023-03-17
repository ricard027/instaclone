import CustomInput from '../../components/input/custonIput.component'
import { InputContainer } from '../../components/input/input.styled'
import {
  AppContainer,
  CreateAcount,
  LoginHeadLine,
  ObtainApp,
  Separator
} from '../login/login.styles'
import { FormContainer, SignUpContainer } from './signup.style'
import { AiFillFacebook } from 'react-icons/ai'
import ButtonComponent from '../../components/button/custonButton.component'

import { useNavigate } from 'react-router-dom'
const SignUpPage = () => {
  const navigate = useNavigate()
  return (
    <SignUpContainer>
      <FormContainer>
        <LoginHeadLine />
        <p>Cadastre-se para ver fotos e védeos dos seus amigos.</p>
        <ButtonComponent icon={<AiFillFacebook size={20} />}>
          Entrar com o Faceook
        </ButtonComponent>
        <Separator>OU</Separator>
        <InputContainer>
          <CustomInput placeholder="E-mail" />
          <CustomInput placeholder="Nome completo" />
          <CustomInput placeholder="Nome de usuário" />
          <CustomInput placeholder="Senha" />
        </InputContainer>

        <p className="terms">
          As pessoas que usam nosso serviço podem ter enviado suas informações
          de contato para o Instagram.
          <span>Saiba mais</span>
        </p>

        <p className="terms">
          Ao se conectar, você concorda com nossos <span>Termos</span>,{' '}
          <span> Política de Privacidade</span> e{' '}
          <span>Política de Cookies</span>.
        </p>

        <ButtonComponent>Cadastre-se</ButtonComponent>
      </FormContainer>

      <CreateAcount>
        Tem uma conta ?{' '}
        <span
          onClick={() => {
            navigate('/')
          }}>
          Conecte-se
        </span>
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
    </SignUpContainer>
  )
}

export default SignUpPage
