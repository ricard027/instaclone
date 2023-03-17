import styled from 'styled-components'

interface IiconsProps {
  icon?: React.ReactNode
}

export const CustonButton = styled.button<IiconsProps>`
  background: #0095f6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  font-weight: bold;
  padding: 0.6rem;
  gap: 0.3rem;
  border: none;
  border-radius: 0.5rem;
  color: #ffffff;
  cursor: pointer;
`
