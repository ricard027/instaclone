import {
  AppContainer,
  CreateAcount,
  ForgotPassword,
  FormContainer,
  LoginContainer,
  LoginFacebook,
  LoginHeadLine,
  MessageError,
  ObtainApp,
  Separator
} from './login.styles'

import { useForm } from 'react-hook-form'

import { AiFillFacebook } from 'react-icons/ai'
import { InputContainer } from '../../components/input/input.styled'
import CustomInput from '../../components/input/CustomInput'
import ButtonComponent from '../../components/button/custonButton.component'

import validator from 'validator'

interface IinputsForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IinputsForm>()

  const handlesubmitPress = (data: any) => {
    console.log({ data })
  }
  console.log({ errors })

  return (
    <LoginContainer>
      <FormContainer>
        <LoginHeadLine />
        <InputContainer>
          <CustomInput
            hasError={!!errors?.email}
            placeholder="e-mail"
            {...register('email', {
              required: true,
              validate: (value) => {
                return validator.isEmail(value)
              }
            })}
          />
          <MessageError>
            {errors.email?.type === 'required' && 'e-mail é obrigatório.'}
            {errors.email?.type === 'validate' && 'e-mail inválido.'}
          </MessageError>

          <CustomInput
            hasError={!!errors?.password}
            placeholder="senha"
            {...register('password', { required: true, minLength: 6 })}
          />

          <MessageError>
            {errors.password?.type === 'required' && 'senha é obrigatória.'}
            {errors.password?.type === 'minLength' &&
              'senha deve conter no mínimo 6 caracteres.'}
          </MessageError>
        </InputContainer>
        <ButtonComponent onClick={() => handleSubmit(handlesubmitPress)()}>
          Entrar
        </ButtonComponent>
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
}

export default LoginPage
