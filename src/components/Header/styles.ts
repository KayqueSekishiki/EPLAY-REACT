import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${cores.cinza};
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 5rem;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: Bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;
`

export const LinkItem = styled.li`
  margin-right: 1rem;
`

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
  }
`
