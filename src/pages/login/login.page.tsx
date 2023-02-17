import { LoginContainer, LoginContent, LoginHeadLine } from './login.styles'

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginContent>{/* imagem */}</LoginContent>
      <LoginContent>
        <LoginHeadLine />
        {/* formulario */}
      </LoginContent>
    </LoginContainer>
  )
}

export default LoginPage
