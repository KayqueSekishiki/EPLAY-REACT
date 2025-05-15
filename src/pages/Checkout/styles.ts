import styled from 'styled-components'
import { cores } from '../../styles'

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
    background-color: ${cores.branca};
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    border: 0.0625rem solid ${cores.branca};
  }
`

export const TabButton = styled.button<TabButtonProps>`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${cores.branca};
  background-color: ${({ isActive }) => (isActive ? cores.verde : cores.preta)};
  border-radius: 0.5rem;
  padding: 0.625rem 0.5rem;
  margin-right: 1rem;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`
