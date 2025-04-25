import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '1rem' : '0.625rem')};
  font-weight: bold;
  padding: ${(props) =>
    props.size === 'big' ? '0.5rem 1rem' : '0.25rem 0.375rem'};
  border-radius: 0.5rem;
  display: inline-block;
`
