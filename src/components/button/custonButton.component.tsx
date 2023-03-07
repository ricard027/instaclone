import { CustonButton } from './button.styled'
import { ButtonHTMLAttributes, FunctionComponent } from 'react'

interface IbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const ButtonComponent: FunctionComponent<IbuttonProps> = ({ children }) => {
  return <CustonButton>{children}</CustonButton>
}
export default ButtonComponent
