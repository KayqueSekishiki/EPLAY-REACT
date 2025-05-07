import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 2rem 0;
  font-size: 0.875rem;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 1rem;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

export const Link = styled(HashLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 4rem;
`
