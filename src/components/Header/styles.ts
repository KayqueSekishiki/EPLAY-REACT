import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 5rem;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: Bold;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 1rem 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 1rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 2rem;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 0.125rem;
    background-color: ${cores.branca};
    margin-bottom: 0.25rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
