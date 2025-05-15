import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input {
    background-color: ${cores.branca};
    width: 100%;
    height: 2rem;
    padding: 0 0.5rem;
    border: 0.0625rem solid ${cores.branca};
  }
`
