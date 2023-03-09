import styled, { css } from 'styled-components'

interface CustomInputProps {
  hasError?: boolean
}
export const InputContainer = styled.div`
  width: 258px;
  margin-top: 10px;
  background: #fafafa;
  text-align: center;
`
export const InputComponent = styled.input<CustomInputProps>`
  ${({ hasError }) =>
    hasError
      ? css`
          color: #ea4335;
          border: solid 1px #ea4335;
        `
      : css`
          color: #0095f6;
          border: solid 1px #0095f6;
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
            color: #ea4335;
          `
        : css`
            color: #0095f6;
          `};

    width: 80%;
    padding: 0 1rem;
  }
`
