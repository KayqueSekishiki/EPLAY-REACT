import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type RowProps = {
  marginTop?: string
}

type InputGroupProps = {
  maxWidth?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  margin-top: ${({ marginTop }) => marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${({ maxWidth }) => maxWidth || 'auto'};

  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    background-color: ${colors.white};
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    border: 0.0625rem solid ${colors.white};

    &.error {
      border: 0.0625rem solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1rem;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${({ isActive }) =>
    isActive ? colors.green : colors.black};
  border-radius: 0.5rem;
  padding: 0.625rem 0.5rem;
  margin-right: 1rem;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 1rem;
  }
`
