import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 0.125rem solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  border-radius: 0.5rem;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${colors.white};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border: 0.125rem solid ${colors.white};
  border-radius: 0.5rem;
  text-decoration: none;
`
