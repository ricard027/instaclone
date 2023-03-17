import styled, { css } from 'styled-components'
import Colors from '../../themes/colors'

interface CustomInputProps {
  hasError?: boolean
}
export const InputContainer = styled.div`
  width: 258px;
  margin-top: 12px;
  background: #fafafa;
  text-align: center;
`
export const InputComponent = styled.input<CustomInputProps>`
  ${({ hasError }) =>
    hasError
      ? css`
          color: ${Colors.Error};
          border: solid 1px ${Colors.Error};
        `
      : css`
          color: ${Colors.input.primary};
          border: solid 1px ${Colors.input.primary};
        `};
  width: 100%;
  margin-top: 8px;
  padding: 0.5rem;
  border-radius: 0.2rem;
  position: relative;

  &::placeholder {
    ${({ hasError }) =>
      hasError
        ? css`
            color: ${Colors.Error};
          `
        : css`
            color: ${Colors.input.primary};
          `};

    width: 80%;
    padding: 0 1rem;
  }
`
