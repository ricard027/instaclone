import { InputComponent } from './input.styled'
import React, {
  FunctionComponent,
  InputHTMLAttributes,
  forwardRef
} from 'react'

interface IpropsInput extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput: FunctionComponent<IpropsInput> = forwardRef((props, ref) => {
  return <InputComponent {...props} ref={ref as any} />
})
CustomInput.displayName = 'CurtonInput'

export default CustomInput
