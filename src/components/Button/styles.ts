import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${cores.branca};
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 0.125rem solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  border-radius: 0.5rem;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branca};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 0.125rem solid ${cores.branca};
  border-radius: 0.5rem;
  text-decoration: none;
`
