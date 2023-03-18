// components
import CustomInput from '../../components/input/custonIput.component'
import ButtonComponent from '../../components/button/custonButton.component'
import { AiFillFacebook } from 'react-icons/ai'

// styles
import { InputContainer } from '../../components/input/input.styled'
import {
  AppContainer,
  CreateAcount,
  LoginHeadLine,
  MessageError,
  ObtainApp,
  Separator
} from '../login/login.styles'
import { FormContainer, SignUpContainer } from './signup.style'
// utilities
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'

interface iformDataCreateAcount {
  name: string
  userName: string
  email: string | number
  password: string
}
const SignUpPage = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<iformDataCreateAcount>()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

  console.log(errors)
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
          <CustomInput
            hasError={!!errors?.email}
            placeholder="E-mail"
            {...register('email', {
              required: true,
              validate: (data) => {
                return validator.isEmail(data as any)
              }
            })}
          />
          <MessageError>
            {errors?.email?.type === 'required' && 'E-mail é obrigatório.'}
            {errors?.email?.type === 'validate' && 'Insira um e-mail válido.'}
          </MessageError>
          <CustomInput
            hasError={!!errors?.name}
            placeholder="Nome completo"
            {...register('name', { required: true })}
          />
          <MessageError>
            {errors?.name?.type === 'required' && 'Nome é obrigatório.'}
          </MessageError>
          <CustomInput
            hasError={!!errors?.userName}
            placeholder="Nome de usuário"
            {...register('userName', { required: true })}
          />
          <MessageError>
            {errors?.userName?.type === 'required' &&
              'Nome de usuário é obrigatório.'}
          </MessageError>
          <CustomInput
            hasError={!!errors?.password}
            placeholder="Senha"
            {...register('password', { required: true })}
          />
          <MessageError>
            {errors?.password?.type === 'required' && 'Senha é obrigatória.'}
          </MessageError>
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

        <ButtonComponent onClick={() => handleSubmit(handleSubmitPress)()}>
          Cadastre-se
        </ButtonComponent>
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
