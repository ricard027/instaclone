import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButton } from './button.styles'

interface IcustonButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  startIcon?: React.ReactNode
}
const ButtonComponent: FunctionComponent<IcustonButtonProps> = ({
  children,
  startIcon
}) => {
  return (
    <CustomButton>
      {startIcon && <i>{/* icone */}</i>}
      {children}
    </CustomButton>
  )
}

export default ButtonComponent
