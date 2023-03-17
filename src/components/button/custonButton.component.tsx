import { CustonButton } from './button.styled'
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react'

interface IbuttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  icon?: React.ReactNode
}

const ButtonComponent: FunctionComponent<IbuttonProps> = ({
  children,
  icon,
  ...rest
}) => {
  return (
    <CustonButton {...rest}>
      {icon && <div>{icon}</div>}
      {children}
    </CustonButton>
  )
}
export default ButtonComponent
