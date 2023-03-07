import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 258px;
  margin-top: 10px;
  background: #fafafa;
  text-align: center;
`
export const InputComponent = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 0.5rem;
  border: solid 1px #dbdbdb;
  border-radius: 0.2rem;
  position: relative;

  &::placeholder {
    color: #8e8e8e;
    width: 80%;
    padding: 0 1rem;
  }
`
