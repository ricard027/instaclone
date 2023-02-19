import React, { FunctionComponent } from 'react'
import { CustomInput } from './input.styles'

const InputComponent: FunctionComponent = React.forwardRef(() => {
  return <CustomInput />
})

InputComponent.displayName = 'InputComponent'

export default InputComponent
