import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  gap: 1rem;
`

export const Item = styled.li`
  img {
    width: 9.375rem;
    height: 9.375 rem;
    border: 0.125rem solid ${cores.branca};
    border-radius: 0.5rem;
    object-fit: cover;
  }
`
