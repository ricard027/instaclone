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
import {
  createUserWithEmailAndPassword,
  AuthError,
  AuthErrorCodes
} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase.config'
import { addDoc, collection } from 'firebase/firestore'
interface IsiginUpForm {
  completedname: string
  userName: string
  email: string
  password: string
}
const SignUpPage = () => {
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = useForm<IsiginUpForm>()

  const handleSubmitPress = async (data: IsiginUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        completedname: data.completedname,
        userName: data.userName,
        email: userCredentials.user.email
      })
    } catch (error) {
      const _erros = error as AuthError
      console.log(_erros)
      if (_erros.code === AuthErrorCodes.EMAIL_EXISTS) {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        return setError('email', { type: 'alreadInuse' })
      }
    }
  }

  console.log({ errors })
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
            {errors?.email?.type === 'required' && 'O e-mail é obrigatório.'}
            {errors?.email?.type === 'validate' &&
              'Por favor, nsira um e-mail válido.'}
            {errors?.email?.type === 'alreadInuse' && 'Este email já existe.'}
          </MessageError>
          <CustomInput
            hasError={!!errors?.completedname}
            placeholder="Nome completo"
            {...register('completedname', { required: true })}
          />
          <MessageError>
            {errors?.completedname?.type === 'required' &&
              'Nome é obrigatório.'}
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
